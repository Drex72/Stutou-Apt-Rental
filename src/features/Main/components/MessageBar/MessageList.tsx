import './MessageBarStyles.scss'
import { GroupedUserChat } from '../../../../utils/groupChatsByReceiver'
import { FiRefreshCcw } from 'react-icons/fi'
import useGetMessages from '../../hooks/useGetMessages'
import MessagesSkeletonLoader from '../../../../components/SkeletonLoaders/MessagesSkeletonLoader/MessagesSkeletonLoader'
import { useMessageActions } from '../../../../hooks/useReduxActions'

interface IMessageList {
    allUserMessages: GroupedUserChat[]
}

const MessageList = (props: IMessageList) => {
    const { allUserMessages } = props
    const { getAllMessages, loading } = useGetMessages({ method: 'get' })
    const { messageSingleUser } = useMessageActions()

    return (
        <div className='animate__animated animate__fadeIn'>
            <div className='message_users_header'>
                <input className="search-bar" type="text" />
                <div className='message_users_refresh_container'>
                    <div className='message_users_refresh'>
                        <FiRefreshCcw onClick={getAllMessages} />
                    </div>
                    <span className="tooltiptext">Refresh Messages</span>

                </div>
            </div>
            <div className="message_users_container">
                {loading ? (
                    <>
                        <MessagesSkeletonLoader />
                        <MessagesSkeletonLoader />
                        <MessagesSkeletonLoader />
                        <MessagesSkeletonLoader />

                    </>
                ) : (
                    <>
                        {allUserMessages.map((user, index) => (
                            <div key={index} className='single_user' onClick={() => messageSingleUser({ chat: user })}>
                                <div className='dummy_image'></div>
                                <div className='single_user_info'>
                                    <h2>{user.user.firstname} {user.user.lastname}</h2>
                                    <p>{user.user.status}</p>

                                </div>
                            </div>
                        ))}

                    </>
                )}

            </div>
        </div>
    )
}

export default MessageList