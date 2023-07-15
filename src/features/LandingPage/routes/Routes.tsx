import { Route } from "react-router-dom";
import { AllRouteConstants } from "../../../router/RouteConstants";
import { ContactUs, Home } from "../pages";

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

      <Route
        path={AllRouteConstants.landingPage.contactUs}
        element={<ContactUs />}
      />
    </>
  );
};

export default LandingPageRoutes;
