import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { useThemeActions } from "../../../hooks/useReduxActions";
import "./SocialMediaLayoutNavbarStyles.scss";
import { AllRouteConstants } from "../../../router/RouteConstants";
import { Link } from "react-router-dom";



const SocialMediaLayoutNavbar = () => {
  const { theme } = useAppSelector(state => state.theme)
  const { toggleTheme } = useThemeActions()

  return (
    <div className="navbar">
      <div className="left">
        <Link to={AllRouteConstants.main.index} style={{ textDecoration: "none" }}>
          <span>StuApt</span>
          {/* <LogoComponent /> */}
        </Link>
        <HomeOutlinedIcon />
        {theme === 'dark' ? (
          <WbSunnyOutlinedIcon onClick={() => toggleTheme('light')} />
        ) : (
          <DarkModeOutlinedIcon onClick={() => toggleTheme('dark')} />
        )}
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="user">
          {/* <img
            src={"/upload/" + currentUser.profilePic}
            alt=""
          /> */}
          <span>Okunoye David</span>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaLayoutNavbar;
