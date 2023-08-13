import React from 'react'
import { useNavigate } from 'react-router-dom';
import { AdminRegister } from '../../../interfaces/IAuthInterface';
import { emailValidator } from '../../../utils/validators/emailValidator';
import { emptyValidator } from '../../../utils/validators/emptyValidator';
import { useForm } from '../../../hooks/useForm';
import authService from '../../../services/authenticationService';
import useApi from '../../../hooks/useApi';
import { AllRouteConstants } from '../../../router/RouteConstants';
import toast from 'react-hot-toast';
import { IRegisterAPIResponse } from '../../../interfaces/IAPIResponse';
import adminService from '../../../services/adminService';

const useAdminRegistration = () => {
    const navigate = useNavigate();

    const signUpForm = useForm<AdminRegister>(
        { email: "", password: "", fullname: '' },
        { email: emailValidator, password: emptyValidator, fullname: emptyValidator, }
    );


    const signUp = (data: AdminRegister) => adminService.signUp(data);

    const signUpApiRequest = useApi<IRegisterAPIResponse, AdminRegister>(signUp);

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        signUpForm.resetFormErrors();
        signUpApiRequest.reset();
        const valid = signUpForm.validate();
        if (valid) {
            try {
                const user = await signUpApiRequest.request(signUpForm.form);
                if (user) {
                    toast.success('Account Successfully Created')
                    navigate(AllRouteConstants.admin.auth.login);
                }
            } catch (error) { }
        }
    };

    return {
        signUpForm,
        handleSubmit,
        loading: signUpApiRequest.loading,
        error: signUpApiRequest.error
    }
}

export default useAdminRegistration