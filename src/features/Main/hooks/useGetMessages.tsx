import { useAppSelector } from '../../../hooks/useAppSelector';
import useApi from '../../../hooks/useApi';
import { useMessageActions } from '../../../hooks/useReduxActions';
import messageService from '../../../services/messageService';
import { IAPIResponse } from '../../../interfaces/IAPIResponse';
import { IChat, ISendChat } from '../../../interfaces/IChat';
import { useState } from 'react';

type IMessageService = { method: "get" } | { method: 'post', chat: ISendChat, receiverId: string }
interface SendChat { receiverId: string; chat: ISendChat }
const useGetMessages = (data: IMessageService) => {
    const { userInfo } = useAppSelector(state => state.authentication)
    const { initializeChats, addChat } = useMessageActions()

    const getAllMessages = () => messageService.getAllMessages()
    const getSentMessages = () => messageService.getSentMessages()
    const getReceivedMessages = () => messageService.getReceivedMessages()

    const sendMessage = (data: SendChat) => messageService.sendMessage({ receiverId: data.receiverId, chat: data.chat })

    const getAllMessagesRequest = useApi<IAPIResponse<IChat[]>, null>(getAllMessages);
    const getSentMessagesRequest = useApi<IAPIResponse<IChat[]>, null>(getSentMessages);
    const getReceivedMessagesRequest = useApi<IAPIResponse<IChat[]>, null>(getReceivedMessages);

    const sendMessageRequest = useApi<IAPIResponse<IChat>, SendChat>(sendMessage);


    // const getAllMessagesHandler = async () => {
    //     getAllMessagesRequest.reset()
    //     try {
    //         const messages = await getAllMessagesRequest.request()
    //         console.log(messages, 'message')
    //         if (messages) {
    //             initializeChats({ chats: messages.data, userId: userInfo.id })
    //         }

    //     } catch (error) { }
    // };

    const [loading, setLoading] = useState(false)

    const getAllMessagesHandler2 = async () => {
        setLoading(true)
        getAllMessagesRequest.reset()
        try {
            const sentMessages = await getSentMessagesRequest.request()
            const receivedMessages = await getReceivedMessagesRequest.request()

            const allSentMessages = sentMessages?.data.map((message) => {
                return { ...message, senderId: userInfo.id }
            })

            const allReceivedMessages = receivedMessages?.data.map((message) => {
                return { ...message, receiverId: userInfo.id }
            })
            const allMessages = [...allReceivedMessages!, ...allSentMessages!]

            initializeChats({ chats: allMessages, userId: userInfo.id })
            setLoading(false)
        } catch (error) { }
    };



    const sendMessageHandler = async () => {
        sendMessageRequest.reset()
        if (data.method === 'post') {
            try {
                const chat = await sendMessageRequest.request({ chat: data.chat, receiverId: data.receiverId })
                if (chat) {
                    addChat({ chat: chat.data })
                }

            } catch (error) { }

        }

    };

    return {
        loading: data.method == 'post' ? sendMessageRequest.loading : loading,
        error: data.method == 'post' ? sendMessageRequest.error : getAllMessagesRequest.error,
        data: data.method == 'post' ? sendMessageRequest.data : getAllMessagesRequest.data,
        getAllMessages: getAllMessagesHandler2,
        sendMessage: sendMessageHandler
    }
}

export default useGetMessages