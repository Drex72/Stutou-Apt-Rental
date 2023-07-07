import React, { useRef, useState } from "react";
import "./LandingPageStyles.scss";
import { CSSTransition } from "react-transition-group";
import LandingPageNavbar from "./LandingPageNavbar/LandingPageNavbar";
import { Outlet } from "react-router-dom";
import LandingPageFooter from "./LandingPageFooter/LandingPageFooter";
import LandingPageNavigationSidebar from "./LandingPageNavigationSidebar/LandingPageNavigationSidebar";

const LandingPageLayout = () => {
  const sidebarContainerRef = useRef(null);
  const sidebarContentRef = useRef(null);
  const [sidebarOpened, setSidebarOpened] = useState(false);

  const handleOpenSide = () => {
    setSidebarOpened(!sidebarOpened);
  };
  return (
    <div>
      <CSSTransition
        nodeRef={sidebarContainerRef}
        in={sidebarOpened}
        classNames="home-layout-mobile__sidebar-container"
        unmountOnExit
        timeout={500}
      >
        <div
          ref={sidebarContainerRef}
          className={`home-layout-mobile__sidebar-container`}
          onClick={handleOpenSide}
        >
          <div
            ref={sidebarContentRef}
            className={`home-layout-mobile__sidebar-content ${
              sidebarOpened ? "slide-in" : "slide-out"
            } `}
          >
            <LandingPageNavigationSidebar />
          </div>
        </div>
      </CSSTransition>

      <LandingPageNavbar
        openSideBar={handleOpenSide}
        sidebarOpened={sidebarOpened}
      />
      <Outlet />
      <LandingPageFooter />
    </div>
  );
};

export default LandingPageLayout;
