/* eslint-disable no-param-reassign */
// Disabling eslint rule for reassigning function parameters as it's intended behavior in this code.
// This can be necessary in Redux Toolkit's createSlice for modifying state.

// Importing the 'createSlice' function from the '@reduxjs/toolkit' library.
import { createSlice } from '@reduxjs/toolkit'
import { IApartment } from '../interfaces/IAPIResponse'

// Defining an interface for the initial state of the apartments slice.
interface IInitialState {
  allApartments: IApartment[] // An array of all apartments.
  selectedApartment: null | IApartment // The currently selected apartment or null.
  filteredApartments: IApartment[] // An array of filtered apartments.
}

// Creating a Redux slice named 'apartmentsSlice' using 'createSlice'.
export const apartmentsSlice = createSlice({
  // Setting the name of the slice.
  name: 'apartments',
  // Defining the initial state of the slice.
  initialState: {
    allApartments: [],
    filteredApartments: [],
    selectedApartment: null
  } as IInitialState, // 'as IInitialState' is used to indicate the type of the initial state.
  // Defining reducer functions for handling state updates.
  reducers: {
    // Reducer function to initialize apartments in the state.
    initializeApartments: (
      state,
      action: {
        payload: IApartment[] // Payload is an array of apartment objects.
      }
    ) => {
      // Updating both 'allApartments' and 'filteredApartments' with the payload.
      state.allApartments = action.payload
      state.filteredApartments = action.payload
    },

    updateFilteredApartments: (
      state,
      action: {
        payload: IApartment[] // Payload is an array of apartment objects.
      }
    ) => {
      // Updating 'filteredApartments' with the payload.
      state.filteredApartments = action.payload
    },

    clearApartmentFilters: (state) => {
      // Updating 'filteredApartments' with the allApartments.
      state.filteredApartments = state.allApartments
    },

    // Reducer function to add a new apartment to the state.
    addApartment: (
      state,
      action: {
        payload: IApartment // Payload is an apartment object to be added.
      }
    ) => {
      const newApartment = action.payload // Extracting the payload.
      state.allApartments = [...state.allApartments, newApartment] // Adding the new apartment to 'allApartments'.
      state.filteredApartments = [...state.filteredApartments, newApartment]
    },

    // Reducer function to select an apartment.
    selectApartment: (
      state,
      action: {
        payload: { apartmentid: string } // Payload is an object with an apartment ID.
      }
    ) => {
      const { apartmentid } = action.payload // Extracting the apartment ID.

      // Finding the selected apartment from 'allApartments' based on the provided ID.
      const selectedApartment = state.allApartments.find(
        (apartment) => apartment._id === apartmentid
      )
      if (selectedApartment) {
        state.selectedApartment = selectedApartment // Updating the selected apartment if found.
      }
    }
  }
})

// Exporting the individual reducer functions as actions.
export const {
  addApartment,
  initializeApartments,
  selectApartment,
  updateFilteredApartments,
  clearApartmentFilters
} = apartmentsSlice.actions

// Exporting the reducer itself to be used in the Redux store.
export default apartmentsSlice.reducer
