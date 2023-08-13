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

  const usersExceptForCurrent = users.filter((user) => user._id !== userId)

  usersExceptForCurrent.forEach((user) => {
    const userChats = chats.filter(
      (item) => item.receiverId === user._id || item.senderId === user._id
    )
    // Convert the createdAt strings back to Date objects
    const formattedChats = userChats.map((chat) => {
      console.log( new Date(chat.createdAt))
      return { ...chat, createdAt: new Date(chat.createdAt) }
    })

    formattedChats.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime())

    if (formattedChats.length > 0) {
      groupedChats.push({
        user: user,
        chats: formattedChats
      })
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
