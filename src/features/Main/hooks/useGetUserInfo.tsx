import { useEffect } from 'react'
import authService from '../../../services/authenticationService';
import { useAppSelector } from '../../../hooks/useAppSelector';
import useApi from '../../../hooks/useApi';
import { useAuthActions } from '../../../hooks/useReduxActions';

const useGetUserInfo = () => {
    const { userInfo } = useAppSelector(state => state.authentication)
    const { getUserDetails } = useAuthActions()
    const getUserInfo = (userId: string) => authService.getUserInfo(userId);

    const getUserInfoRequest = useApi<IGetStudentAPIResponse, string>(getUserInfo);

    const getUserInfoHandler = async (userId?: string) => {
        getUserInfoRequest.reset();
        try {
            const user = await getUserInfoRequest.request(userId ?? userInfo.id);
            if (user && !userId) {
                getUserDetails(user)
            }
            return user
        } catch (error) { }

    };

    useEffect(() => {
        if (!userInfo?.email) {
            getUserInfoHandler()
        }
    }, [])

    return {
        loading: getUserInfoRequest.loading,
        error: getUserInfoRequest.error,
        data: getUserInfoRequest.data,
        requestUserInfo: getUserInfoHandler
    }
}

export default useGetUserInfo