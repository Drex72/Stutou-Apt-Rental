import { Route } from "react-router-dom";
import { AllRouteConstants } from "../../../router/RouteConstants";
import { Home } from "../pages";

const LandingPageRoutes = () => {

  return (
    <>
      <Route
        index
        path={AllRouteConstants.landingPage.index}
        element={<Home />}
      />

      <Route
        path={AllRouteConstants.landingPage.home}
        element={<Home />}
      />
    </>
  );
};

export default LandingPageRoutes;
