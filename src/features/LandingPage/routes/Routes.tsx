import { Route } from "react-router-dom";
import { AllRouteConstants } from "../../../router/RouteConstants";
import { AboutUs, ContactUs, Home } from "../pages";

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
      <Route
        path={AllRouteConstants.landingPage.aboutUs}
        element={<AboutUs />}
      />
    </>
  );
};

export default LandingPageRoutes;
