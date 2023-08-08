import useApi from '../../../hooks/useApi';
import apartmentService from '../../../services/apartmentService';
import { useForm } from '../../../hooks/useForm';
import { IApartment } from '../../../interfaces/IApartment';
import { emptyValidator } from '../../../utils/validators/emptyValidator';
import { useApartmentActions } from '../../../hooks/useReduxActions';

const useCreateApartment = (handleClose:any) => {
    const { addApartment } = useApartmentActions()
    const apartmentForm = useForm<IApartment>(
        {
            categories: [],
            description: '',
            highestPrice: '',
            image: null,
            location: '',
            lowestPrice: '',
            name: '',
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
        }
    );


    const handleChangeApartmentCategories = (apartmentType: string) => {
        if (apartmentForm.form.categories.includes(apartmentType)) {
            const filteredCategories = apartmentForm.form.categories.filter((item) => item !== apartmentType)
            apartmentForm.onChange('categories', filteredCategories)
        } else {
            apartmentForm.onChange('categories', [...apartmentForm.form.categories, apartmentType])
        }
    }



    const createApartment = (data: FormData) => apartmentService.createApartment(data);

    const createApartmentRequest = useApi<IGetApartmentAPIResponse, FormData>(createApartment);

    const createApartmentHandler: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        apartmentForm.resetFormErrors();
        createApartmentRequest.reset();

        const valid = apartmentForm.validate();

        if (valid) {
            const apartmentFormData = new FormData()
            for (let key in apartmentForm.form) {
                apartmentFormData.append(key, apartmentForm.form[key])
            }

            try {
                const apartment = await createApartmentRequest.request(apartmentFormData);
                console.log(apartment)
                if (apartment) {
                    addApartment(apartment.data)
                    handleClose()
                }
            } catch (error) { }
        }


    };

    return {
        loading: createApartmentRequest.loading,
        error: createApartmentRequest.error,
        handleSubmit: createApartmentHandler,
        apartmentForm, handleChangeApartmentCategories
    }
}

export default useCreateApartment