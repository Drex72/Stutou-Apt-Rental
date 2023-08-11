import { useEffect, useState } from 'react'
import './MessageBarStyles.scss'
import { useAppSelector } from '../../../../hooks/useAppSelector'
import { IUser } from '../../../../interfaces/IAPIResponse'
import MessageList from './MessageList'
import { GroupedUserChat, groupChatsBySenderReceiver } from '../../../../utils/groupChatsByReceiver'
import UserMessage from './UserMessage'
import { useMessageActions } from '../../../../hooks/useReduxActions'

const MessageBar = () => {

    const { messages, users, authentication } = useAppSelector(state => state)
    const { messages: userMessages, singleUserMessage } = messages
    const { messageSingleUser } = useMessageActions()

    const [allUserMessages, setAllUserMessages] = useState<GroupedUserChat[]>([])

    useEffect(() => {
        const chats = groupChatsBySenderReceiver(userMessages, users.users, authentication.userInfo.id)
        setAllUserMessages(chats)

        if (singleUserMessage) {
            let selectedChat = chats.find((item) => item.user._id === singleUserMessage?.user._id)
            if (selectedChat) {
                messageSingleUser({ chat: selectedChat })
            }
        }
    }, [users, userMessages])

    return (
        <div>
            <>
                <input type="checkbox" id="check" />
                <div className="window">
                    <label className="top-bar" htmlFor="check">
                        <div className="kapsayici">
                            <div className="profile">
                                <img
                                    className="pp"
                                    src="https://i.pinimg.com/564x/58/ac/2e/58ac2e722527319666603da8a7570f53.jpg"
                                />
                                <div className="online" />
                                <a>Messages</a>
                            </div>
                            {/**/}
                            <div className="icons">
                                <p className="symbol">❮</p>
                            </div>
                        </div>
                    </label>
                    {singleUserMessage ? (
                        <UserMessage selectedMessage={singleUserMessage} />
                    ) : (
                        <MessageList allUserMessages={allUserMessages} />
                    )}

                </div>
            </>

        </div>
    )
}

export default MessageBar