// Importing necessary modules, hooks, and utilities.
import { useForm } from '../../../hooks/useForm' // Custom hook for managing form state.
import { IApartmentFilter } from '../../../interfaces/IApartment' // Interface for apartment filtering.
import { emptyValidator } from '../../../utils/validators/emptyValidator' // Utility for empty value validation.
import { useApartmentActions } from '../../../hooks/useReduxActions' // Custom hook for using Redux actions related to apartments.
import { toast } from 'react-hot-toast' // Library for displaying toast messages.
import { filterApartments } from '../../../utils/filterApartments' // Utility for filtering apartments.
import { useAppSelector } from '../../../hooks/useAppSelector' // Custom hook for accessing selected state from the Redux store.

// Defining a custom hook named 'useFilterApartment'.
const useFilterApartment = (func?: any) => {
  const { updateFilteredApartments } = useApartmentActions() // Using custom Redux action hook.
  const { filteredApartments, allApartments } = useAppSelector(
    (state) => state.apartments
  ) // Accessing filtered apartments from the Redux store.

  // Using the 'useForm' hook to manage the state of the apartment filter form.
  const apartmentFilterForm = useForm<IApartmentFilter>(
    // Initial form values and validation rules.
    {
      categories: [],
      highestPrice: '',
      lowestPrice: '',
      noOfRooms: '',
      postCode: [],
      isVerified: false
    },
    {
      lowestPrice: emptyValidator // Applying the empty value validator to the lowestPrice field.
    }
  )

  // Function to check if the filter form is empty.
  const checkIfFilterFormIsEmpty = (form: IApartmentFilter) => {
    // Iterate through all the properties of the filter object.
    for (const key in form) {
      const value = form[key as keyof IApartmentFilter]
      // Check if the value is not an empty string or an empty array.
      if (
        (Array.isArray(value) && value.length > 0) ||
        (typeof value === 'string' && value.trim() !== '') ||
        (typeof value === 'number' && value !== 0)
      ) {
        return false
      }
    }

    // If no non-empty values were found, the object is considered empty.
    return true
  }

  // Event handler for filtering apartments.
  const handleFilterApartments: React.FormEventHandler<
    HTMLFormElement
  > = async (e) => {
    e.preventDefault()
    console.log(apartmentFilterForm.form)

    // Check if the form is empty.
    if (checkIfFilterFormIsEmpty(apartmentFilterForm.form)) {
      return toast.error('Form is Empty')
    }

    // Reset any previous form errors.
    apartmentFilterForm.resetFormErrors()

    // Validate the form.
    const valid = apartmentFilterForm.validate()

    if (valid) {
      // Filter apartments based on the form data.
      const allFilteredApartments = filterApartments(
        allApartments,
        apartmentFilterForm.form
      )
      console.log(allFilteredApartments)

      if (func) {
        func()
      }

      // Update the filtered apartments in the Redux store.
      updateFilteredApartments(allFilteredApartments)
    }
  }

  // Return the event handler and the apartment filter form for use in components.
  return {
    handleFilterApartments,
    apartmentFilterForm
  }
}

// Exporting the custom hook for use in other components.
export default useFilterApartment
