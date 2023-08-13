import { useNavigate } from "react-router-dom";
import DashboardSidebarItem from "./DashboardSidebarItems";
import Logout from "../../../assets/icons/Logout.svg";
import "./DashboardSidebarStyles.scss";

import {
  AiOutlineHome, AiOutlineUser,
} from "react-icons/ai";
import { BsFillHouseDoorFill } from 'react-icons/bs'

import Logo from "../../../components/Logo/Logo";
import { AllRouteConstants } from "../../../router/RouteConstants";
import { useAuthActions } from "../../../hooks/useReduxActions";
const DashboardSidebar = () => {
  const navigate = useNavigate();
  const { logout } = useAuthActions()

  const handleLogout = async () => {
    logout()
    navigate(AllRouteConstants.admin.auth.login);

  };

  const goToPage = (page: string) => () => navigate(page);
  return (
    <div className="dashboard_sidebar_container">
      <div
        onClick={() => navigate(AllRouteConstants.landingPage.index)}
        className="dashboard_sidebar_logo"
      >
        <Logo />
      </div>

      <div className="dashboard_sidebar_items">
        <DashboardSidebarItem
          paths={["/", AllRouteConstants.admin.index]}
          onClick={goToPage(AllRouteConstants.admin.index)}
          sidebarIcon={<AiOutlineHome />}
          sidebarItemName="Dashboard"
        />
        <DashboardSidebarItem
          paths={["/stu-admin/users", AllRouteConstants.admin.users.index]}
          onClick={goToPage(AllRouteConstants.admin.users.index)}
          sidebarIcon={<AiOutlineUser />}
          sidebarItemName="Users"
        />
        <DashboardSidebarItem
          paths={["/stu-admin/users", AllRouteConstants.admin.apartments.index]}
          onClick={goToPage(AllRouteConstants.admin.apartments.index)}
          sidebarIcon={<BsFillHouseDoorFill />}
          sidebarItemName="Apartments"
        />
        {/* <DashboardSidebarItem
          paths={["/stu-admin/users", AllRouteConstants.admin.addresses.index]}
          onClick={goToPage(AllRouteConstants.admin.addresses.index)}
          sidebarIcon={<CiLocationOn />}
          sidebarItemName="Addresses"
        /> */}
      </div>

      <div className="dashboard_sidebar_logout" onClick={handleLogout}>
        <img src={Logout} />
        <span>Logout</span>
      </div>
    </div>
  );
};

export default DashboardSidebar;
