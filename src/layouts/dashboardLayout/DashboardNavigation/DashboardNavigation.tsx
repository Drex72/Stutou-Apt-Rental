import { RxHamburgerMenu } from "react-icons/rx";
import "./DashboardNavigationStyles.scss";
import Logo from "../../../components/Logo/Logo";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { useLayoutActions } from "../../../hooks/useReduxActions";

const DashboardNavigation = () => {
  // const dispatch = useDispatch();
  const { sidebarOpened } = useAppSelector((state) => state.layout);
  const { toggleSideBar } = useLayoutActions()

  const handleOpenSide = () => {
    toggleSideBar(!sidebarOpened)
  };

  return (
    <div className="dashboard_navigation_container">
      <div className="dashboard_navigation_logo">
        <Logo />
      </div>
      <div
        className="dashboard_navigation_hamburger_container"
        onClick={handleOpenSide}
      >
        <RxHamburgerMenu className="dashboard_navigation_hamburger" />
      </div>
    </div>
  );
};

export default DashboardNavigation;
