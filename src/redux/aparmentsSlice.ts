/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

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

    addApartment: (
      state,
      action: {
        payload: IApartment
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
        (apartment) => apartment._id === apartmentid
      )
      if (selectedApartment) {
        state.selectedApartment = selectedApartment
      }
    }
  }
})

export const { addApartment, initializeApartments, selectApartment } =
  apartmentsSlice.actions

export default apartmentsSlice.reducer
