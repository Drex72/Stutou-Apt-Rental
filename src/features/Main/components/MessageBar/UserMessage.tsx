import './MessageBarStyles.scss'
import { GroupedUserChat } from '../../../../utils/groupChatsByReceiver'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import Message from './Message'
import { useAppSelector } from '../../../../hooks/useAppSelector'
import { BsFillSendFill } from 'react-icons/bs'
import { formatTimeTo12Hour } from '../../../../utils/formatTime'
import Spinner from '../../../../components/Spinner/Spinner'
import useGetMessages from '../../hooks/useGetMessages'
import { ISendChat } from '../../../../interfaces/IChat'
import { useEffect, useRef, useState } from 'react'
import { useMessageActions } from '../../../../hooks/useReduxActions'

interface IUserMessage {
    selectedMessage: GroupedUserChat
}

const UserMessage = (props: IUserMessage) => {
    const { chats, user } = props.selectedMessage
    const { clearMessageSingleUser } = useMessageActions()
    const { id, email, firstname } = useAppSelector((state) => state.authentication).userInfo
    const chatContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [chats]);
    const [currentChat, setCurrentChat] = useState<ISendChat>({
        email, name: firstname, message: ''
    })
    const { loading, sendMessage } = useGetMessages({ method: 'post', receiverId: user._id, chat: currentChat })

    const handleSendChat: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()
        await sendMessage()
        setCurrentChat({ ...currentChat, message: '' })
    }

    return (
        <div className='user_message animate__animated animate__fadeIn'>
            <div className='user_message_header'>
                <AiOutlineArrowLeft className='back_arrow' onClick={clearMessageSingleUser} />
                <div className='user_message_header_user_info_container' >
                    <div className='dummy_image'></div>
                    <div className='user_message_header_user_info'>
                        <h2>{user.firstname} {user.lastname}</h2>
                        <p>{user.status}</p>

                    </div>
                </div>
            </div>
            <div className="user_message_body">
                <div className='user_message_body_inner_container'>
                    <div className='user_message_body_chat_container' ref={chatContainerRef}>
                        {chats.map((chat, index) => (
                            <Message name={chat.senderId === id ? 'You' : chat.name} text={chat.message} time={formatTimeTo12Hour(chat.createdAt)} type={chat.receiverId === user._id ? 'sender' : 'receiver'} key={index} />
                        ))}
                    </div>
                    <form className='user_message_body_send_message' onSubmit={handleSendChat}>
                        <input
                            className='user_message_body_send_message_input'
                            type='text' placeholder='Type in a Message'
                            value={currentChat.message}
                            required
                            onChange={(e) => setCurrentChat({ ...currentChat, message: e.target.value })}
                        />
                        <button
                            className="user_message_body_send_message_button"
                            type='submit'
                        >
                            {loading ? (
                                <Spinner />
                            ) : (
                                <BsFillSendFill />
                            )}

                        </button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default UserMessage