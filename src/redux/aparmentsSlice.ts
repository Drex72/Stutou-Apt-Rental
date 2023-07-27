/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { IPost } from '../interfaces/IPost'

interface IInitialState {
  allApartments: IApartment[]
  selectedApartment: null | IApartment
}

export const apartmentsSlice = createSlice({
  name: 'apartments',
  initialState: {
    allApartments: [],
    selectedApartment: null
  } as IInitialState,
  reducers: {
    initializeApartments: (
      state,
      action: {
        payload: IApartment[]
      }
    ) => {
      state.allApartments = action.payload
    },

    createApartment: (
      state,
      action: {
        payload: IPost
      }
    ) => {
      const newPost = action.payload
      state.allApartments = [...state.allApartments, newPost]
    },

    selectApartment: (
      state,
      action: {
        payload: { apartmentid: string }
      }
    ) => {
      const { apartmentid } = action.payload
      
      const selectedApartment = state.allApartments.find(
        (apartment) => apartment.id === apartmentid
      )
      if (selectedApartment) {
        state.selectedApartment = selectedApartment
      }
    }
  }
})

export const { createApartment, initializeApartments, selectApartment } =
  apartmentsSlice.actions

export default apartmentsSlice.reducer
