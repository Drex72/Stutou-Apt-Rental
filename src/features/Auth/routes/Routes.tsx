import { Route } from "react-router-dom";
import { ForgotPassword, Login, Register, } from "../pages";
import { AllRouteConstants } from "../../../router/RouteConstants";

const AuthRoutes = () => {
  return (
    <>
      <Route path={AllRouteConstants.auth.index} index element={<Login />} />
      <Route path={AllRouteConstants.auth.login} element={<Login />} />
      <Route path={AllRouteConstants.auth.signup} element={<Register />} />
      <Route path={AllRouteConstants.auth.forgotPassword} element={<ForgotPassword />} />
    </>
  );
};

export default AuthRoutes;
