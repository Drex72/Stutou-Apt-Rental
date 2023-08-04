import useApi from '../../../hooks/useApi';
import apartmentService from '../../../services/apartmentService';
import { useForm } from '../../../hooks/useForm';
import { IApartment } from '../../../interfaces/IApartment';
import { emptyValidator } from '../../../utils/validators/emptyValidator';

const useCreateApartment = () => {
    const apartmentForm = useForm<IApartment>(
        {
            categories: [],
            description: '',
            highestPrice: '',
            image: null,
            location: '',
            lowestPrice: '',
            name: '',
            owner: '',
            rooms: ''
        },
        {
            categories: emptyValidator,
            description: emptyValidator,
            highestPrice: emptyValidator,
            image: emptyValidator,
            location: emptyValidator,
            lowestPrice: emptyValidator,
            name: emptyValidator,
            owner: emptyValidator,
        }
    );


    const createApartment = (data: FormData) => apartmentService.createApartment(data);

    const createApartmentRequest = useApi<IGetAllApartmentAPIResponse, FormData>(createApartment);

    const createApartmentHandler: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        apartmentForm.resetFormErrors();
        createApartmentRequest.reset();

        const valid = apartmentForm.validate();

        if (valid) {
            try {
                const apartment = await createApartmentRequest.request();
                if (apartment) {
                    console.log(apartment)
                    // requestUserInfo(apartments.data)
                }
            } catch (error) { }
        }


    };

    return {
        loading: createApartmentRequest.loading,
        error: createApartmentRequest.error,
        handleSubmit: createApartmentHandler,
        apartmentForm
    }
}

export default useCreateApartment