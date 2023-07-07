import { Route } from "react-router-dom";
import { Login, StudentRegistration } from "../pages";
import { AllRouteConstants } from "../../../router/RouteConstants";

const AuthRoutes = () => {
  return (
    <>
      <Route path={AllRouteConstants.auth.index} index element={<Login />} />
      <Route path={AllRouteConstants.auth.login} element={<Login />} />
      <Route path={AllRouteConstants.auth.signup.student} element={<StudentRegistration />} />
    </>
  );
};

export default AuthRoutes;
