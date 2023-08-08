import { useEffect } from 'react'
import { useAppSelector } from '../../../hooks/useAppSelector';
import useApi from '../../../hooks/useApi';
import { useApartmentActions } from '../../../hooks/useReduxActions';
import apartmentService from '../../../services/apartmentService';

const useGetAllApartments = () => {
    const { allApartments } = useAppSelector(state => state.apartments)
    const { initializeApartments } = useApartmentActions()

    const getAllApartments = () => apartmentService.getAllApartments();

    const getAllApartmentsRequest = useApi<IGetAllApartmentAPIResponse, null>(getAllApartments);

    const getAllApartmentsHandler = async () => {
        getAllApartmentsRequest.reset();
        try {
            const apartments = await getAllApartmentsRequest.request();
            console.log(apartments)
            if (apartments) {
                initializeApartments(apartments.data)
                // requestUserInfo(apartments.data)
            }
        } catch (error) { }

    };

    useEffect(() => {
        if (allApartments.length === 0) {
            getAllApartmentsHandler()
        }
    }, [])

    return {
        loading: getAllApartmentsRequest.loading,
        error: getAllApartmentsRequest.error,
        data: getAllApartmentsRequest.data
    }
}

export default useGetAllApartments