import React from 'react'
import { useNavigate } from 'react-router-dom';
import { IStudentRegister } from '../../../interfaces/IAuthInterface';
import { emailValidator } from '../../../utils/validators/emailValidator';
import { emptyValidator } from '../../../utils/validators/emptyValidator';
import { useForm } from '../../../hooks/useForm';
import authService from '../../../services/authenticationService';
import { IAuthenticationResponse } from '../../../interfaces/IUserInterface';
import useApi from '../../../hooks/useApi';
import { AllRouteConstants } from '../../../router/RouteConstants';

const useStudentRegistration = () => {
    const navigate = useNavigate();

    const studentSignUpForm = useForm<IStudentRegister>(
        { email: "", password: "", firstName: '', lastName: '' },
        { email: emailValidator, password: emptyValidator, firstName: emptyValidator, lastName: emptyValidator }
    );


    const studentSignUp = (data: IStudentRegister) => authService.login(data);

    const studentSignUpApiRequest = useApi<IAuthenticationResponse, IStudentRegister>(studentSignUp);

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        studentSignUpForm.resetFormErrors();
        studentSignUpApiRequest.reset();
        const valid = studentSignUpForm.validate();
        if (valid) {
            try {
                const user = await studentSignUpApiRequest.request(studentSignUpForm.form);
                if (user) {
                    console.log(user)
                    // login({ response: user, rememberMe: rememberMe! });
                    navigate(AllRouteConstants.auth.login);
                }
            } catch (error) { }
        }
    };

    return {
        studentSignUpForm,
        handleSubmit,
        loading: studentSignUpApiRequest.loading,
        error: studentSignUpApiRequest.error
    }
}

export default useStudentRegistration