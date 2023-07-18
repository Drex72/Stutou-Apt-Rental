/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { IPost } from '../interfaces/IPost'

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    allPosts: [] as IPost[],
    selectedPosts: {} as IPost
  },
  reducers: {
    initializePosts: (
      state,
      action: {
        payload: IPost[]
      }
    ) => {
      state.allPosts = action.payload
    },

    createPost: (
      state,
      action: {
        payload: IPost
      }
    ) => {
      const newPost = action.payload
      state.allPosts = [...state.allPosts, newPost]
    },

    selectPost: (
      state,
      action: {
        payload: { postId: string }
      }
    ) => {
      const { postId } = action.payload
      const selectedPost = state.allPosts.find((post) => post.id === postId)
      if (selectedPost) {
        state.selectedPosts = selectedPost
      }
    }
  }
})

export const { initializePosts, createPost, selectPost } = postsSlice.actions

export default postsSlice.reducer
