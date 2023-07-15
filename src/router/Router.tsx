import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFound/NotFound";
import ScrollToTop from "../components/ScrollToTop";
import LandingPageLayout from "../layouts/LandingPageLayout/LandingPageLayout";
import { AllRouteConstants } from "./RouteConstants";
import LandingPageRoutes from "../features/LandingPage/routes/Routes";
import AuthLayout from "../layouts/authLayout/AuthLayout";
import AuthRoutes from "../features/Auth/routes/Routes";
import SocialMediaLayout from "../layouts/SocialMediaLayout/SocialMediaLayout";

/**
 * These are the routes Container for all the routes in the application
 * It workes by having a Route component that 
 * @returns 
 */
function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>

        {/* The element prop specifies the component that should be rendered when the route is matched. 
        In this case, the <LandingPageLayout /> component will be displayed when the URL matches the specified path. 
        It represents the layout or structure of the landing page. */}
        <Route
          path={AllRouteConstants.landingPage.index}
          element={<LandingPageLayout />}
        >
          {/* There is a function call, {LandingPageRoutes()}, which is used to define nested routes specific to the landing page. These nested routes allow you to organize and manage different sections or features of the landing page separately. */}
          {LandingPageRoutes()}
        </Route>

        {/* Routes for the Authentication (The Same concept for the Landing Page) */}
        <Route
          path={AllRouteConstants.auth.index}
          element={<AuthLayout />}
        >
          {AuthRoutes()}
        </Route>

        {/* Routes for the Social Media App (The Same concept for the Landing Page) */}
        <Route
          path={AllRouteConstants.main.index}
          element={<SocialMediaLayout />}
        >
          {/* {AuthRoutes()} */}
        </Route>


        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
