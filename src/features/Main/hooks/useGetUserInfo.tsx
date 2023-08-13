import { useEffect } from 'react'
import authService from '../../../services/authenticationService';
import { useAppSelector } from '../../../hooks/useAppSelector';
import useApi from '../../../hooks/useApi';
import { useAuthActions } from '../../../hooks/useReduxActions';
import { IAPIResponse, IUser } from '../../../interfaces/IAPIResponse';
import useGetMessages from './useGetMessages';
import useGetUsers from './useGetUsers';

const useGetUserInfo = () => {
    const { userInfo } = useAppSelector(state => state.authentication)
    const { getUserDetails } = useAuthActions()
    const { getAllMessages, loading: getMessagesLoading } = useGetMessages({ method: 'get' })
    const { loading: getUsersLoading, getAllUsers } = useGetUsers()


    const getUserInfo = (userId: string) => authService.getUserInfo(userId);

    const getUserInfoRequest = useApi<IAPIResponse<IUser>, string>(getUserInfo);

    const getUserInfoHandler = async (userId?: string) => {
        getUserInfoRequest.reset();
        try {
            if (!userInfo?.email) {
                const user = await getUserInfoRequest.request(userId ?? userInfo.id);

                if (user && !userId) {
                    getUserDetails(user.data)
                }
            }
        } catch (error) { }

    };

    useEffect(() => {
        getUserInfoHandler()
        getAllMessages()
        getAllUsers()
    }, [])

    return {
        loading: getUserInfoRequest.loading || getUsersLoading || getMessagesLoading,
        error: getUserInfoRequest.error,
        data: getUserInfoRequest.data,
        requestUserInfo: getUserInfoHandler
    }
}

export default useGetUserInfo