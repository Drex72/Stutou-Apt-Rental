import React, { useEffect } from 'react'
import authService from '../../../services/authenticationService';
import { useAppSelector } from '../../../hooks/useAppSelector';
import useApi from '../../../hooks/useApi';
import { useAuthActions } from '../../../hooks/useReduxActions';

const useGetUserInfo = () => {
    const { userInfo } = useAppSelector(state => state.authentication)
    const { getUserDetails } = useAuthActions()
    const getUserInfo = () => authService.getUserInfo(userInfo.id);

    const getUserInfoRequest = useApi<IGetStudentAPIResponse, null>(getUserInfo);

    const getUserInfoHandler = async () => {
        getUserInfoRequest.reset();
        try {
            const user = await getUserInfoRequest.request();
            if (user) {
                getUserDetails(user)
            }
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
        data: getUserInfoRequest.data
    }
}

export default useGetUserInfo