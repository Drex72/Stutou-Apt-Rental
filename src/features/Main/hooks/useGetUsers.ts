import useApi from '../../../hooks/useApi'
import { useUserActions } from '../../../hooks/useReduxActions'
import { IAPIResponse, IUser } from '../../../interfaces/IAPIResponse'
import authService from '../../../services/authenticationService'

const useGetUsers = () => {
  const { initializeUsers } = useUserActions()

  const getAllUsers = () => authService.getAllUsers()

  const getAllUsersRequest = useApi<IAPIResponse<IUser[]>, null>(getAllUsers)

  const getAllUsersHandler = async () => {
    try {
      const users = await getAllUsersRequest.request()

      if (users) {
        initializeUsers(users.data)
      }
    } catch (error) {}
  }

  return {
    loading: getAllUsersRequest.loading,
    error: getAllUsersRequest.error,
    data: getAllUsersRequest.data,
    getAllUsers: getAllUsersHandler
  }
}

export default useGetUsers
