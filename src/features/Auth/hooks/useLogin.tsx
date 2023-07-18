import { useNavigate } from "react-router-dom";
import useApi from "../../../hooks/useApi";
import { useForm } from "../../../hooks/useForm";
import { emailValidator } from "../../../utils/validators/emailValidator";
import { emptyValidator } from "../../../utils/validators/emptyValidator";
import { ILoginInput } from "../interfaces/ILoginInput";
import { useAuthActions } from "../../../hooks/useReduxActions";
import { IAuthenticationResponse } from "../../../interfaces/IUserInterface";
import authService from "../../../services/authenticationService";
import { AllRouteConstants } from "../../../router/RouteConstants";

const useLogin = (rememberMe?: boolean) => {
    const navigate = useNavigate();
    const { login } = useAuthActions();

    const loginForm = useForm<ILoginInput>(
        { email: "", password: "" },
        { email: emailValidator, password: emptyValidator }
    );


    const signin = (data: ILoginInput) => authService.login(data);

    const loginApiRequest = useApi<IAuthenticationResponse, ILoginInput>(signin);

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        loginForm.resetFormErrors();
        // loginApiRequest.reset();
        // const valid = loginForm.validate();
        // if (valid) {
        //     try {
        //         const user = await loginApiRequest.request(loginForm.form);
        //         if (user) {
        //             login({ response: user, rememberMe: rememberMe! });
        //             // navigate(AllRouteConstants.main.dashboard);
        //         }
        //     } catch (error) { }
        // }
        navigate(AllRouteConstants.main.index);

    };

    return {
        loginForm,
        handleSubmit,
        loading: loginApiRequest.loading,
        error: loginApiRequest.error
    }
}

export default useLogin