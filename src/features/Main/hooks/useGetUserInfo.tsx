import { useEffect } from 'react'
import authService from '../../../services/authenticationService';
import { useAppSelector } from '../../../hooks/useAppSelector';
import useApi from '../../../hooks/useApi';
import { useAuthActions, useUserActions } from '../../../hooks/useReduxActions';
import { IAPIResponse, IUser } from '../../../interfaces/IAPIResponse';
import useGetMessages from './useGetMessages';

const useGetUserInfo = () => {
    const { userInfo } = useAppSelector(state => state.authentication)
    const { getUserDetails } = useAuthActions()
    const { initializeUsers } = useUserActions()
    const { getAllMessages, loading: getMessagesLoading } = useGetMessages({ method: 'get' })


    const getUserInfo = (userId: string) => authService.getUserInfo(userId);
    const getAllUsers = () => authService.getAllUsers();

    const getUserInfoRequest = useApi<IAPIResponse<IUser>, string>(getUserInfo);
    const getAllUsersRequest = useApi<IAPIResponse<IUser[]>, null>(getAllUsers);

    const getUserInfoHandler = async (userId?: string) => {
        getUserInfoRequest.reset();
        try {
            if (!userInfo?.email) {
                const user = await getUserInfoRequest.request(userId ?? userInfo.id);

                if (user && !userId) {
                    getUserDetails(user.data)
                }
            }
            const users = await getAllUsersRequest.request()

            if (users) {
                initializeUsers(users.data)
            }
        } catch (error) { }

    };

    useEffect(() => {
        getUserInfoHandler()
        getAllMessages()
    }, [])

    return {
        loading: getUserInfoRequest.loading || getAllUsersRequest.loading || getMessagesLoading,
        error: getUserInfoRequest.error || getAllUsersRequest.error,
        data: getUserInfoRequest.data,
        requestUserInfo: getUserInfoHandler
    }
}

export default useGetUserInfo