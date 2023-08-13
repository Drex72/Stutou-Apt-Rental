/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { IChat } from '../interfaces/IChat'
import { GroupedUserChat } from '../utils/groupChatsByReceiver'

export const messageSlice = createSlice({
  name: 'messages',
  initialState: {
    messageStatus: false,
    messages: [] as IChat[],
    singleUserMessage: null as GroupedUserChat | null
  },
  reducers: {
    toggleMessageStatus: (
      state,
      action: {
        payload: boolean
      }
    ) => {
      const { payload } = action
      state.messageStatus = payload
    },

    initializeChats: (
      state,
      action: {
        payload: {
          chats: IChat[]
          userId: string
        }
      }
    ) => {
      const { chats, userId } = action.payload
      state.messages = chats.filter(
        (chat) => chat.receiverId === userId || chat.senderId === userId
      )
    },

    addChat: (
      state,
      action: {
        payload: {
          chat: IChat
        }
      }
    ) => {
      const { chat } = action.payload

      state.messages = [...state.messages, chat]
    },

    messageSingleUser: (
      state,
      action: {
        payload: {
          chat: GroupedUserChat
        }
      }
    ) => {
      const { chat } = action.payload
      state.singleUserMessage = chat
    },

    clearMessageSingleUser: (state) => {
      state.singleUserMessage = null
    }
  }
})

export const {
  toggleMessageStatus,
  initializeChats,
  addChat,
  messageSingleUser,
  clearMessageSingleUser
} = messageSlice.actions

export default messageSlice.reducer
