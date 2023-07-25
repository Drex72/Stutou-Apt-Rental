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
import Popover from "@mui/material/Popover";
import { useState } from "react";
import Notifications from "../../../features/Main/components/Notifications/Notifications";


const SocialMediaLayoutNavbar = () => {
  const { theme } = useAppSelector(state => state.theme)
  const { toggleTheme } = useThemeActions()

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const handleShowNotification = (event: any) => {
    setAnchorEl(event.currentTarget as any);
  };
  const handleCloseNotification = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="navbar">
      <div className="left">
        <Link to={AllRouteConstants.main.index} style={{ textDecoration: "none" }}>
          <span>StuApt</span>
          {/* <LogoComponent /> */}
        </Link>
        <HomeOutlinedIcon />
        <div className="theme_toggler">
          {theme === 'dark' ? (
            <WbSunnyOutlinedIcon onClick={() => toggleTheme('light')} />
          ) : (
            <DarkModeOutlinedIcon onClick={() => toggleTheme('dark')} />
          )}

        </div>
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon />
        <>
          <NotificationsOutlinedIcon className="notification_icon" aria-describedby={id} onClick={handleShowNotification} />

          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleCloseNotification}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Notifications />
          </Popover>
        </>
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
