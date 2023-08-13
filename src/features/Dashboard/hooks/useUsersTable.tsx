import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ILoginAPIResponse, IUser } from '../../../interfaces/IAPIResponse'
import adminService from '../../../services/adminService'
import useApi from '../../../hooks/useApi'
import { useUserActions } from '../../../hooks/useReduxActions'
import { toast } from 'react-hot-toast'

const useUsersTable = ({ closePopup }: { closePopup: () => void }) => {
    const [userToBeEdited, setUserToBeEdited] = useState<
        {
            status: boolean,
            user: IUser | null,
            action: 'delete' | 'deactivate' | null
        }
    >(
        {
            status: false,
            user: null,
            action: null
        }
    )
    const navigate = useNavigate()
    const { deleteUser:deleteUserAuthAction } = useUserActions()

    const [drawerOpen, setDrawerOpen] = useState<{ status: boolean, user: IUser | null }>({ status: false, user: null })

    const handleClickUser = (user: IUser, action: 'view' | 'deactivate' | 'delete') => {
        switch (action) {
            case 'view':
                if (user.status === 'owner') {
                    navigate('')
                } else {
                    setDrawerOpen({ status: true, user })
                    closePopup()
                    handleUnClickUser()
                }
                return
            case 'deactivate':
                return setUserToBeEdited({ status: true, action: 'deactivate', user })
            case 'delete':
                return setUserToBeEdited({ status: true, action: 'delete', user })

        }
    }

    const handleUnClickUser = () => {
        setUserToBeEdited({ status: false, user: null, action: null })
    }

    const handleDeleteUser = () => {
        const deleteUserService = (userId: string) => adminService.deleteUser(userId);
        const deleteUserRequest = useApi<ILoginAPIResponse, string>(deleteUserService);

        const deleteUser = async (userId: string) => {
            try {
                const user = await deleteUserRequest.request(userId);
                if (user) {
                    toast.success('User Deleted Successfully')
                    deleteUserAuthAction(userId)
                    closePopup()
                    handleUnClickUser()
                }
            } catch (error) {

            }
        }

        return {
            loading: deleteUserRequest.loading,
            error: deleteUserRequest.error,
            deleteUser
        }

    }
    const handleDeactivateUser = async () => { }


    return {
        handleClickUser, drawerOpen, setDrawerOpen, userToBeEdited, handleDeactivateUser, handleDeleteUser, handleUnClickUser
    }

}

export default useUsersTable