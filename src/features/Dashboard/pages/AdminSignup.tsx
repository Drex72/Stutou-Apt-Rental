

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
import useRegistration from "../hooks/useAdminRegistration";
import { AdminRegister } from "../../../interfaces/IAuthInterface";

export const AdminSignup = () => {
  const { error, handleSubmit, loading, signUpForm } = useRegistration()
  const { passwordType, togglePassword } = usePasswordType()
  const { form, onChange, formErrors } = signUpForm

  const formChange = (key: keyof AdminRegister, value: any) => {
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
              id="Full Name"
              label="Full Name"
              error={formErrors.fullname}
              animation="animate__animated animate__fadeInLeft"
              inputProps={{
                placeholder: "First Name",
                value: form.fullname,
                onChange: (e) => formChange("fullname", e.target.value),
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
                to={AllRouteConstants.admin.auth.login}
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

