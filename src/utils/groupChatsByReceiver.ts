import { IUser } from '../interfaces/IAPIResponse'
import { IChat } from '../interfaces/IChat'

export interface GroupedUserChat {
  user: IUser
  chats: IChat[]
}
export function groupChatsBySenderReceiver(
  chats: IChat[],
  users: IUser[],
  userId: string
): GroupedUserChat[] {
  const groupedChats: GroupedUserChat[] = []

  users.forEach((user) => {
    if (user._id !== userId) {
      const userChats: IChat[] = chats.filter(
        (chat) => chat.senderId === user._id || chat.receiverId === user._id
      )

      if (userChats.length > 0) {
        groupedChats.push({
          user: user,
          chats: userChats
        })
      }
    }
  })

  return groupedChats
}
export function groupSingleChatBySenderReceiver(
  chats: IChat[],
  user: IUser
): GroupedUserChat {
  let groupedChat: GroupedUserChat | null = null

  const userChats: IChat[] = chats.filter(
    (chat) => chat.senderId === user._id || chat.receiverId === user._id
  )
  groupedChat = {
    user: user,
    chats: userChats
  }

  return groupedChat
}

export function getUserInformation(
  users: IUser[],
  userId: string
): IUser | undefined {
  return users.find((user) => user._id === userId)
}
