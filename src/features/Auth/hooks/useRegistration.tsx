import React from 'react'
import { useNavigate } from 'react-router-dom';
import { UserRegister } from '../../../interfaces/IAuthInterface';
import { emailValidator } from '../../../utils/validators/emailValidator';
import { emptyValidator } from '../../../utils/validators/emptyValidator';
import { useForm } from '../../../hooks/useForm';
import authService from '../../../services/authenticationService';
import useApi from '../../../hooks/useApi';
import { AllRouteConstants } from '../../../router/RouteConstants';
import  toast  from 'react-hot-toast';
import { IRegisterAPIResponse } from '../../../interfaces/IAPIResponse';

const useRegistration = () => {
    const navigate = useNavigate();

    const signUpForm = useForm<UserRegister>(
        { email: "", password: "", firstname: '', lastname: '', status: 'student' },
        { email: emailValidator, password: emptyValidator, firstname: emptyValidator, lastname: emptyValidator }
    );


    const signUp = (data: UserRegister) => authService.studentSignUp(data);

    const signUpApiRequest = useApi<IRegisterAPIResponse, UserRegister>(signUp);

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
                    navigate(AllRouteConstants.auth.login);
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

export default useRegistration