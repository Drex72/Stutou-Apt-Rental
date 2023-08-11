import FormHeader from '../../../components/form/formHeader'
import { AuthFormInput } from '../components/authFormInput/AuthFormInput'
import FormError from '../../../components/form/formError/FormError'
import useForgotPassword from '../hooks/useForgotPassword'
import { IForgotPassword } from '../../../interfaces/IAuthInterface'
import Button from '../../../components/Button/Button'

export const ForgotPassword = () => {
    const { handleSubmit, error, loading, forgotPasswordForm, } = useForgotPassword()
    const formChange = (key: keyof IForgotPassword, value: any) => {
        forgotPasswordForm.onChange(key, value);
        return;
    };

  

    return (
        <div className="animate__animated animate__fadeIn">
            {/* {linkSent && <ForgotPasswordModal onClose={handleCloseModal} />} */}
            <FormHeader content="Forgot Password" size="md" />
            <form onSubmit={handleSubmit}>
                <AuthFormInput
                    id="email"
                    label="Email Address"
                    error={forgotPasswordForm.formErrors.email}
                    animation="animate__animated animate__fadeInLeft"
                    inputProps={{
                        placeholder: "Email",
                        value: forgotPasswordForm.form.email,
                        onChange: (e) => formChange("email", e.target.value),
                        required: true,
                    }}
                />
                <FormError error={error?.error} />
                <Button
                    animation="animate__animated animate__backInUp"
                    label="Forgot Password"
                    variant="contained"
                    loading={loading}
                />
            </form>
        </div>
    )
}

