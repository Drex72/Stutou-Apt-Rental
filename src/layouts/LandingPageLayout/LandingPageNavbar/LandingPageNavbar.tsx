import "./LandingPageNavbarStyles.scss";
import { motion } from "framer-motion";
import Animations from "../../../utils/Animations";
import { Link, useLocation } from "react-router-dom";
import Hamburger from "hamburger-react";
import { AllRouteConstants } from "../../../router/RouteConstants";
import { useEffect, useState } from "react";
import LogoComponent from "../../../components/Logo/Logo";



interface ILandingPageNavbar {
  openSideBar: () => void;
  sidebarOpened: boolean;
  heroPage?: boolean
}

const LandingPageNavbar = (props: ILandingPageNavbar) => {
  const { sidebarOpened, openSideBar, heroPage } = props;
  const { pathname } = useLocation();
  const currentPath = pathname.split("/")[1];
  const { stagger, fadeInUp, btnGroup } = new Animations();

  const [navbarScrolled, setNavbarScrolled] = useState(false)

  // Check if window is scrolled more than 500px, 

  const handleScroll = () => {
    const scrolledHeight = window.scrollY
    if (scrolledHeight > 50) {
      setNavbarScrolled(true)
    } else {
      setNavbarScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <motion.header
      initial="initial"
      animate="animate"
      variants={stagger()}
      className={`landing_page_navbar ${heroPage ? 'landing_page_navbar_hero' : ''}  ${navbarScrolled ? 'solid' : ''}`}
    >

      <nav className="landing_page_navbar-container">
        <motion.div
          className="landing_page_navbar_left"
          initial="initial"
          animate="animate"
          variants={fadeInUp()}
        >
          <LogoComponent />

          <motion.ul
            initial="initial"
            className="landing_page_navbar_left-list_container"
            animate="animate"
            variants={stagger()}
          >
            <li className={currentPath === "" ? "active" : ""}>
              <Link to={AllRouteConstants.landingPage.home}>Home</Link>
            </li>
            <li className={currentPath === "about-us" ? "active" : ""}>
              <Link to={AllRouteConstants.landingPage.aboutUs}>About</Link>
            </li>
            <li className={currentPath === "contact-us" ? "active" : ""}>
              <Link to={AllRouteConstants.landingPage.contactUs}>Contact Us</Link>
            </li>
          </motion.ul>
        </motion.div>

        <motion.span
          initial="initial"
          className="landing_page_navbar_right"
          animate="animate"
          variants={btnGroup()}
        >
          <Link
            to={AllRouteConstants.auth.login}
            className="landing_page_navbar_right-login_button button"
          >
            Log in
          </Link>
          <Link
            to={AllRouteConstants.auth.signup}
            className="landing_page_navbar_right-signup_button button"
          >
            Sign Up
          </Link>
        </motion.span>

        <motion.span className="landing_page_navbar-hamburger">
          <Hamburger
            toggled={sidebarOpened}
            size={20}
            color="#000"
            toggle={openSideBar}
          />
        </motion.span>
      </nav>
    </motion.header>
  );
};

export default LandingPageNavbar;
