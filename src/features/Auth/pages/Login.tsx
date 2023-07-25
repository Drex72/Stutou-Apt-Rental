import { Link, } from "react-router-dom";
import visible from "../../../assets/icons/visible.svg";
import notvisible from "../../../assets/icons/not-visible.svg";
import { ILoginInput } from "../interfaces/ILoginInput";
import "../styles/LoginStyles.scss";
import FormError from "../../../components/form/formError/FormError";
import useLogin from "../hooks/useLogin";
import Button from "../../../components/Button/Button";
import Input from "../../../components/form/Input/Input";
import { AllRouteConstants } from "../../../router/RouteConstants";
import usePasswordType from "../hooks/usePasswordType";

export const Login = () => {
  const { handleSubmit, loginForm, loading, error } = useLogin()
  const { passwordType, togglePassword } = usePasswordType()

  const formChange = (key: keyof ILoginInput, value: any) => {
    loginForm.onChange(key, value);
    return;
  };

  return (
    <div className="animate__animated animate__fadeIn">
      <div className="auth-box">
        <h1 className="auth-title">
          Welcome back
        </h1>
        <p className="auth-top_text">
          We encourage passwordless login being more secure and safe
        </p>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-field">
            <Input
              id="email"
              label="Email"
              error={loginForm.formErrors.email}
              animation="animate__animated animate__fadeInLeft"
              inputProps={{
                placeholder: "Email",
                value: loginForm.form.email,
                onChange: (e) => formChange("email", e.target.value),
                required: true,
              }}
            />
          </div>

          <div className="auth-field">
            <Input
              id="password"
              label="Password"
              error={loginForm.formErrors.password}
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
                value: loginForm.form.password,
                onChange: (e) => formChange("password", e.target.value),
                required: true,
              }}
            />
          </div>

          <Button
            animation="animate__animated animate__backInUp"
            label="Login"
            variant="contained"
            loading={loading}
          />

          <FormError error={error?.message} />
        </form>
        {/* 
        <div className="auth-or_container">
          <div className="auth-or_line"></div>
          <span className="auth-or_text">OR</span>
          <div className="auth-or_line" />
        </div>

        <Button
          label={
            <div className="auth-google">
              <img src={Google} className="auth-google_icon" />
              <span>Sign In With Google</span>
            </div>
          }
          variant="outlined"
          type="submit"
        /> */}

        <div className="auth-footer">
          <p className="auth-signup">
            Don't have an Account?
            <Link className="auth-link" to={AllRouteConstants.auth.signup}>Sign up</Link>
          </p>
          <Link className="auth-link" to={AllRouteConstants.auth.forgotPassword}>Forgot Password</Link>

        </div>
      </div>

    </div>
  );
};
