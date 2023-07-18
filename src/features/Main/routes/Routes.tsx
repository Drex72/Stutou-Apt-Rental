import { Route } from "react-router-dom";
import { AllRouteConstants } from "../../../router/RouteConstants";
import { Home } from "../pages";

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


    </>
  );
};

export default SocialMediaRoutes;
