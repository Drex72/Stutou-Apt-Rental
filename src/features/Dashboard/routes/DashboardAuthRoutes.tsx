import { Route } from "react-router-dom";
import { AllRouteConstants } from "../../../router/RouteConstants";
import { AdminSignup, AdminLogin } from "../pages";


export const DashboardAuthRoutes = () => {
  return (
    <>
      <Route path={AllRouteConstants.admin.auth.index} index element={<AdminLogin />} />
      <Route path={AllRouteConstants.admin.auth.login} element={<AdminLogin />} />
      <Route path={AllRouteConstants.admin.auth.register} element={<AdminSignup />} />
    </>
  );
};

