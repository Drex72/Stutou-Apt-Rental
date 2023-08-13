import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IApartment, ILoginAPIResponse, } from '../../../interfaces/IAPIResponse'
import adminService from '../../../services/adminService'
import useApi from '../../../hooks/useApi'
import { useApartmentActions, } from '../../../hooks/useReduxActions'
import { toast } from 'react-hot-toast'

const useApartmentsTable = ({ closePopup }: { closePopup: () => void }) => {
    const { selectApartment, } = useApartmentActions()
    const [apartmentToBeEdited, setApartmentToBeEdited] = useState<
        {
            status: boolean,
            apartment: IApartment | null,
            action: 'view' | 'verify' | null
        }
    >(
        {
            status: false,
            apartment: null,
            action: null
        }
    )

    const navigate = useNavigate()

    const handleUnClickApartment = () => {
        setApartmentToBeEdited({ status: false, apartment: null, action: null })
    }

    const handleClickApartment = (apartment: IApartment, action: 'view' | 'verify') => {
        switch (action) {
            case 'view':
                navigate(`/stu-admin/apartments/${apartment._id}`)
                selectApartment({ apartmentid: apartment._id })
                return
            case 'verify':
                return setApartmentToBeEdited({ status: true, action: 'verify', apartment })

        }
    }

    const handleVerifyApartment = () => {
        const verifyApartmentService = (apartmentId: string) => adminService.verifyApartment(apartmentId);
        const verifyApartmentRequest = useApi<ILoginAPIResponse, string>(verifyApartmentService);

        const verifyApartment = async (apartmentId: string) => {
            try {
                const user = await verifyApartmentRequest.request(apartmentId);
                if (user) {
                    toast.success('Apartment Verified Successfully')
                    closePopup()
                }
            } catch (error) {

            }
        }

        return {
            loading: verifyApartmentRequest.loading,
            error: verifyApartmentRequest.error,
            verifyApartment
        }

    }

    return {
        handleClickApartment, handleVerifyApartment, apartmentToBeEdited, handleUnClickApartment
    }

}

export default useApartmentsTable