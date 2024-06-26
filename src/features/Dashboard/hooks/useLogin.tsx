import { useNavigate } from "react-router-dom";
import useApi from "../../../hooks/useApi";
import { useForm } from "../../../hooks/useForm";
import { emailValidator } from "../../../utils/validators/emailValidator";
import { emptyValidator } from "../../../utils/validators/emptyValidator";
import { ILoginInput } from "../interfaces/ILoginInput";
import { useAuthActions } from "../../../hooks/useReduxActions";
import { AllRouteConstants } from "../../../router/RouteConstants";
import { ILoginAPIResponse } from "../../../interfaces/IAPIResponse";
import adminService from "../../../services/adminService";

const useLogin = () => {
    const navigate = useNavigate();
    const { login } = useAuthActions();

    const loginForm = useForm<ILoginInput>(
        { email: "", password: "" },
        { email: emailValidator, password: emptyValidator }
    );


    const signin = (data: ILoginInput) => adminService.login(data);

    const loginApiRequest = useApi<ILoginAPIResponse, ILoginInput>(signin);

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        loginForm.resetFormErrors();
        loginApiRequest.reset();
        const valid = loginForm.validate();
        if (valid) {
            try {
                const user = await loginApiRequest.request(loginForm.form);
                if (user) {
                    login({ response: user, userType: 'admin' });
                    navigate(AllRouteConstants.admin.index);
                }
            } catch (error) { }
        }

    };

    return {
        loginForm,
        handleSubmit,
        loading: loginApiRequest.loading,
        error: loginApiRequest.error
    }
}

export default useLogin