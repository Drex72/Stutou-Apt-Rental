import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { useThemeActions } from "../../../hooks/useReduxActions";
import "./SocialMediaLayoutNavbarStyles.scss";
import { AllRouteConstants } from "../../../router/RouteConstants";
import { Link } from "react-router-dom";
import Popover from "@mui/material/Popover";
import Notifications from "../../../features/Main/components/Notifications/Notifications";
import usePopOver from "../../../hooks/usePopOver";
import Profile from "../../../features/Main/components/Profile/Profile";


const SocialMediaLayoutNavbar = () => {
  const { theme } = useAppSelector(state => state.theme)
  const { userInfo } = useAppSelector(state => state.authentication)
  const { toggleTheme } = useThemeActions()


  const { handleClick: handleOpenProfile, handleClose: handleCloseProfile, id: profileId, anchorEl: profileAnchor, open: profileOpen } = usePopOver()
  const { handleClick: handleShowNotification, handleClose: handleCloseNotification, id: notificationId, anchorEl: notificationAnchor, open: notificationOpen } = usePopOver()



  return (
    <div className="navbar">
      <div className="left">
        <Link to={AllRouteConstants.landingPage.index} style={{ textDecoration: "none" }}>
          <span>StuApt</span>
        </Link>
        <HomeOutlinedIcon />
        <div className="navbar_icon">
          {theme === 'dark' ? (
            <WbSunnyOutlinedIcon onClick={() => toggleTheme('light')} />
          ) : (
            <DarkModeOutlinedIcon onClick={() => toggleTheme('dark')} />
          )}

        </div>
        {/* <GridViewOutlinedIcon /> */}
        {/* <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div> */}
      </div>
      <div className="right">
        <>
          <PersonOutlinedIcon className="navbar_icon" aria-describedby={profileId} onClick={handleOpenProfile} />

          <Popover
            id={profileId}
            open={profileOpen}
            anchorEl={profileAnchor}
            onClose={handleCloseProfile}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Profile />

          </Popover>
        </>
        <>
          <NotificationsOutlinedIcon className="navbar_icon" aria-describedby={notificationId} onClick={handleShowNotification} />

          <Popover
            id={notificationId}
            open={notificationOpen}
            anchorEl={notificationAnchor}
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

          <span>{userInfo.firstname ?? 'Okunoye'} {userInfo.lastname ?? 'David'}</span>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaLayoutNavbar;
