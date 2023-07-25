import useApi from "../../../hooks/useApi";
import { useForm } from "../../../hooks/useForm";
import { emailValidator } from "../../../utils/validators/emailValidator";
import { IForgotPassword } from "../../../interfaces/IAuthInterface";
import { useState } from "react";
import authService from "../../../services/authenticationService";

const useForgotPassword = () => {
    const [linkSent, setLinkSent] = useState(false)

    const forgotPasswordForm = useForm<IForgotPassword>(
        { email: '' },
        { email: emailValidator }
    );

    const forgotPassword = (data: IForgotPassword) => authService.forgotPassword(data);

    const forgotPasswordApiRequest = useApi<any, IForgotPassword>(forgotPassword);



    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        forgotPasswordForm.resetFormErrors();
        forgotPasswordApiRequest.reset();
        const valid = forgotPasswordForm.validate();
        if (valid) {
            try {
                const user = await forgotPasswordApiRequest.request({
                    email: forgotPasswordForm.form.email
                });
                if (user) {
                    setLinkSent(true)
                }
            } catch (error) { }
        }
    };

    return {
        forgotPasswordForm,
        handleSubmit,
        loading: forgotPasswordApiRequest.loading,
        error: forgotPasswordApiRequest.error,
        linkSent,
        setLinkSent
    }
}

export default useForgotPassword