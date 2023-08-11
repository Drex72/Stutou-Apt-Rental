import { Route } from "react-router-dom";
import { AllRouteConstants } from "../../../router/RouteConstants";
import { Home, SingleApartment } from "../pages";

const SocialMediaRoutes = () => {

  return (
    <>
      <Route
        index
        path={AllRouteConstants.main.index}
        element={<Home />}
      />

      <Route
        path={AllRouteConstants.main.index}
        element={<Home />}
      />


      <Route
        path={AllRouteConstants.main.apartment.singleApartment}
        element={<SingleApartment />}
      />

    </>
  );
};

export default SocialMediaRoutes;
