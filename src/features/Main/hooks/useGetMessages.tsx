import { useAppSelector } from '../../../hooks/useAppSelector';
import useApi from '../../../hooks/useApi';
import { useMessageActions } from '../../../hooks/useReduxActions';
import messageService from '../../../services/messageService';
import { IAPIResponse } from '../../../interfaces/IAPIResponse';
import { IChat, ISendChat } from '../../../interfaces/IChat';

type IMessageService = { method: "get" } | { method: 'post', chat: ISendChat, receiverId: string }
interface SendChat { receiverId: string; chat: ISendChat }
const useGetMessages = (data: IMessageService) => {
    const { userInfo } = useAppSelector(state => state.authentication)
    const { getSingleUserChat, addChat } = useMessageActions()

    const getAllMessages = () => messageService.getAllMessages()
    const sendMessage = (data: SendChat) => messageService.sendMessage({ receiverId: data.receiverId, chat: data.chat })

    const getAllMessagesRequest = useApi<IAPIResponse<IChat[]>, null>(getAllMessages);
    const sendMessageRequest = useApi<IAPIResponse<IChat>, SendChat>(sendMessage);


    const getAllMessagesHandler = async () => {
        getAllMessagesRequest.reset()
        try {
            const messages = await getAllMessagesRequest.request()
            if (messages) {
                getSingleUserChat({ chats: messages.data, userId: userInfo.id })
            }

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
        loading: data.method == 'post' ? sendMessageRequest.loading : getAllMessagesRequest.loading,
        error: data.method == 'post' ? sendMessageRequest.error : getAllMessagesRequest.error,
        data: data.method == 'post' ? sendMessageRequest.data : getAllMessagesRequest.data,
        getAllMessages: getAllMessagesHandler,
        sendMessage: sendMessageHandler
    }
}

export default useGetMessages