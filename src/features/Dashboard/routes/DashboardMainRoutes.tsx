import { Route } from "react-router-dom";
import { AllRouteConstants } from "../../../router/RouteConstants";
import { AdminAddresses, AdminApartments, AdminUsers, Home } from "../pages";


export const DashboardMainRoutes = () => {
  return (
    <>
      <Route path={AllRouteConstants.admin.index} index element={<Home />} />
      <Route path={AllRouteConstants.admin.users.index} element={<AdminUsers />} />
      <Route path={AllRouteConstants.admin.addresses.index} element={<AdminAddresses />} />
      <Route path={AllRouteConstants.admin.apartments.index} element={<AdminApartments />} />
    </>
  );
};

