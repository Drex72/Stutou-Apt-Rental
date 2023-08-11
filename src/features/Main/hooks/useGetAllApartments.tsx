// Importing necessary modules and functions from various files.
// 'useEffect' is a hook from the 'react' library that allows performing side effects in function components.
import { useEffect } from 'react'
import { useAppSelector } from '../../../hooks/useAppSelector'; // Custom hook for accessing selected state from the Redux store.
import useApi from '../../../hooks/useApi'; // Custom hook for handling API requests and responses.
import { useApartmentActions } from '../../../hooks/useReduxActions'; // Custom hook for using Redux actions related to apartments.
import apartmentService from '../../../services/apartmentService'; // Service module for interacting with apartment-related APIs.
import { apartmentPosts } from '../data/posts'; // An array containing dummy apartment data.

// Defining a custom hook named 'useGetAllApartments' which takes a 'dummy' boolean parameter.
const useGetAllApartments = (dummy: boolean) => {
    // Using the custom 'useAppSelector' hook to extract the 'allApartments' state from the Redux store.
    const { allApartments } = useAppSelector(state => state.apartments)

    // Using the custom 'useApartmentActions' hook to get the 'initializeApartments' Redux action.
    const { initializeApartments } = useApartmentActions()

    // Defining a function to fetch all apartments using the 'apartmentService' module.
    const getAllApartments = () => apartmentService.getAllApartments();

    // Using the custom 'useApi' hook to handle an API request for getting all apartments.
    // The response data type is 'IGetAllApartmentAPIResponse' and the request payload is 'null'.
    const getAllApartmentsRequest = useApi<IGetAllApartmentAPIResponse, null>(getAllApartments);

    // Defining a function to handle getting all apartments from the API.
    const getAllApartmentsHandler = async () => {
        // Resetting the API request status using the 'reset' function from 'getAllApartmentsRequest'.
        getAllApartmentsRequest.reset();

        // If 'dummy' is true, initialize apartments with dummy data, otherwise use data from the API response.
        if (dummy) {
            return initializeApartments(apartmentPosts)
        }
        try {
            // Sending the API request using the 'request' function from 'getAllApartmentsRequest'.
            const apartments = await getAllApartmentsRequest.request();
            if (apartments) {
                // initialize apartments with data from the API response.
                initializeApartments(apartments.data)
            }
        } catch (error) {
            // If there's an error during the API request, it's caught and ignored here.
        }
    };

    // Using the 'useEffect' hook to perform the 'getAllApartmentsHandler' function when the component mounts.
    // It only runs once (empty dependency array), and only if 'allApartments' in Redux store is empty.
    useEffect(() => {
        if (allApartments.length === 0) {
            getAllApartmentsHandler()
        }
    }, [])

    // Returning an object with loading, error, and data properties from the API request.
    return {
        loading: getAllApartmentsRequest.loading, // Boolean indicating if the request is loading.
        error: getAllApartmentsRequest.error, // Any error that occurred during the request.
        data: getAllApartmentsRequest.data // Data received from the API response.
    }
}

// Exporting the custom hook 'useGetAllApartments' for use in other components.
export default useGetAllApartments
