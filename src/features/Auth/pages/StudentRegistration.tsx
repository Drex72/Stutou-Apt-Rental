import { Link } from "react-router-dom";
import visible from "../../../assets/icons/visible.svg";
import notvisible from "../../../assets/icons/not-visible.svg";
import "../styles/LoginStyles.scss";
import FormError from "../../../components/form/formError/FormError";
import Button from "../../../components/Button/Button";
import Input from "../../../components/form/Input/Input";
import Google from "../../../assets/icons/google.svg";
import { AllRouteConstants } from "../../../router/RouteConstants";
import useStudentRegistration from '../hooks/useStudentRegistration'
import { IStudentRegister } from "../../../interfaces/IAuthInterface";
import usePasswordType from "../hooks/usePasswordType";

export const StudentRegistration = () => {
    const { error, handleSubmit, loading, studentSignUpForm } = useStudentRegistration()
    const { passwordType, togglePassword } = usePasswordType()

    const formChange = (key: keyof IStudentRegister, value: any) => {
        studentSignUpForm.onChange(key, value);
        return;
    };

    return (
        <div className="animate__animated animate__fadeIn">
            <div className="auth-box">
                <h1 className="auth-title">
                    Student Sign Up
                </h1>

                <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="auth-field">
                        <Input
                            id="First Name"
                            label="First Name"
                            error={studentSignUpForm.formErrors.firstName}
                            animation="animate__animated animate__fadeInLeft"
                            inputProps={{
                                placeholder: "First Name",
                                value: studentSignUpForm.form.firstName,
                                onChange: (e) => formChange("firstName", e.target.value),
                                required: true,
                            }}
                        />
                    </div>

                    <div className="auth-field">
                        <Input
                            id="Last Name"
                            label="Last Name"
                            error={studentSignUpForm.formErrors.lastName}
                            animation="animate__animated animate__fadeInLeft"
                            inputProps={{
                                placeholder: "Last Name",
                                value: studentSignUpForm.form.lastName,
                                onChange: (e) => formChange("lastName", e.target.value),
                                required: true,
                            }}
                        />
                    </div>

                    <div className="auth-field">
                        <Input
                            id="email"
                            label="Email"
                            error={studentSignUpForm.formErrors.email}
                            animation="animate__animated animate__fadeInLeft"
                            inputProps={{
                                placeholder: "Email",
                                value: studentSignUpForm.form.email,
                                onChange: (e) => formChange("email", e.target.value),
                                required: true,
                            }}
                        />
                    </div>

                    <div className="auth-field">
                        <Input
                            id="password"
                            label="Password"
                            error={studentSignUpForm.formErrors.password}
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
                                value: studentSignUpForm.form.password,
                                onChange: (e) => formChange("password", e.target.value),
                                required: true,
                            }}
                        />
                    </div>

                    <Button
                        animation="animate__animated animate__backInUp"
                        label="Sign Up"
                        variant="contained"
                        loading={loading}
                    />

                    <FormError error={error?.error} />
                </form>

                <div className="auth-or_container">
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
                />

                <div className="auth-footer">
                    <div>
                        <p className="auth-signup">
                            Have an Account? <Link
                                to={AllRouteConstants.auth.login}
                                className="auth-link"
                            >
                                Log up
                            </Link>
                        </p>
                    </div>
                    <Link className="auth-link" to={AllRouteConstants.auth.forgotPassword}>Forgot Password</Link>

                </div>
            </div>

        </div>
    )
}

