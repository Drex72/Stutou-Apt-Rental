import { Link } from "react-router-dom";
import visible from "../../../assets/icons/visible.svg";
import notvisible from "../../../assets/icons/not-visible.svg";
import "../styles/LoginStyles.scss";
import FormError from "../../../components/form/formError/FormError";
import Button from "../../../components/Button/Button";
import Input from "../../../components/form/Input/Input";
// import Google from "../../../assets/icons/google.svg";
import { AllRouteConstants } from "../../../router/RouteConstants";
import usePasswordType from "../hooks/usePasswordType";
import useRegistration from "../hooks/useRegistration";
import { UserRegister } from "../../../interfaces/IAuthInterface";

export const Register = () => {
    const { error, handleSubmit, loading, signUpForm } = useRegistration()
    const { passwordType, togglePassword } = usePasswordType()
    const { form, onChange, formErrors } = signUpForm

    const formChange = (key: keyof UserRegister, value: any) => {
        onChange(key, value);
        return;
    };

    return (
        <div className="animate__animated animate__fadeIn">
            <div className="auth-box">
                <h1 className="auth-title">
                    Sign Up
                </h1>

                <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="auth-field">
                        <Input
                            id="First Name"
                            label="First Name"
                            error={formErrors.firstname}
                            animation="animate__animated animate__fadeInLeft"
                            inputProps={{
                                placeholder: "First Name",
                                value: form.firstname,
                                onChange: (e) => formChange("firstname", e.target.value),
                                required: true,
                            }}
                        />
                    </div>

                    <div className="auth-field">
                        <Input
                            id="Last Name"
                            label="Last Name"
                            error={formErrors.lastname}
                            animation="animate__animated animate__fadeInLeft"
                            inputProps={{
                                placeholder: "Last Name",
                                value: form.lastname,
                                onChange: (e) => formChange("lastname", e.target.value),
                                required: true,
                            }}
                        />
                    </div>

                    <div className="auth-field">
                        <Input
                            id="email"
                            label="Email"
                            error={formErrors.email}
                            animation="animate__animated animate__fadeInLeft"
                            inputProps={{
                                placeholder: "Email",
                                value: form.email,
                                onChange: (e) => formChange("email", e.target.value),
                                required: true,
                            }}
                        />
                    </div>

                    <div className="auth-field">
                        <Input
                            id="password"
                            label="Password"
                            error={formErrors.password}
                            animation="animate__animated animate__fadeInRight"
                            rightIcon={
                                <div
                                    style={{ marginLeft: "10px", cursor: "pointer" }}
                                    onClick={togglePassword}
                                >
                                    {passwordType === "password" ? (
                                        <img src={visible} style={{ width: "20px" }} />
                                    ) : (
                                        <img src={notvisible} style={{ width: "20px" }} />
                                    )}
                                </div>
                            }
                            inputProps={{
                                type: passwordType,
                                placeholder: "Password",
                                value: form.password,
                                onChange: (e) => formChange("password", e.target.value),
                                required: true,
                            }}
                        />
                    </div>


                    <div className="auth-field">
                        <p className="auth_user_type-label">I am a: </p>
                        <div className="auth_login_checkboxes">
                            <Input
                                id="apartment Owner"
                                label="Apartment Owner"
                                error={formErrors.status}
                                inputProps={{
                                    onChange: () => formChange('status', 'owner'),
                                    type: "radio",
                                    name: "status",
                                    required: true,
                                }}
                            />
                            <Input
                                id="student"
                                label="Student"
                                error={formErrors.status}
                                inputProps={{
                                    onChange: () => formChange('status', 'student'),
                                    type: "radio",
                                    name: "status",
                                    required: true,
                                }}
                            />
                        </div>
                    </div>



                    <Button
                        animation="animate__animated animate__backInUp"
                        label="Sign Up"
                        variant="contained"
                        loading={loading}
                    />

                    <FormError error={error?.error} />
                </form>

                {/* <div className="auth-or_container">
                    <div className="auth-or_line"></div>
                    <span className="auth-or_text">OR</span>
                    <div className="auth-or_line" />
                </div>

                <Button
                    label={
                        <div className="auth-google">
                            <img src={Google} className="auth-google_icon" />
                            <span>Sign Up With Google</span>
                        </div>
                    }
                    variant="outlined"
                    type="submit"
                /> */}

                <div className="auth-footer">
                    <div>
                        <p className="auth-signup">
                            Have an Account? <Link
                                to={AllRouteConstants.auth.login}
                                className="auth-link"
                            >
                                Log In
                            </Link>
                        </p>
                    </div>
                    <Link className="auth-link" to={AllRouteConstants.auth.forgotPassword}>Forgot Password</Link>

                </div>
            </div >

        </div >
    )
}

