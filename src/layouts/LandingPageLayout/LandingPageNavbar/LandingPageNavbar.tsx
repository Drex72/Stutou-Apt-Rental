import "./LandingPageNavbarStyles.scss";
import { motion } from "framer-motion";
import Animations from "../../../utils/Animations";
import { Link, useLocation } from "react-router-dom";
import Hamburger from "hamburger-react";
import { AllRouteConstants } from "../../../router/RouteConstants";
import SignUpOptionsPopver from "../../../features/Auth/components/SignUpOptionsPopver";
import usePopOver from "../../../hooks/usePopOver";
import { Link as ScrollLink } from 'react-scroll';
import { useEffect, useState } from "react";
import LogoComponent from "../../../components/Logo/Logo";



interface ILandingPageNavbar {
  openSideBar: () => void;
  sidebarOpened: boolean;
}

const LandingPageNavbar = (props: ILandingPageNavbar) => {
  const { sidebarOpened, openSideBar } = props;
  const { pathname } = useLocation();
  const currentPath = pathname.split("/")[1];
  const { stagger, fadeInUp, btnGroup } = new Animations();

  const { handleClick, handleClose, id, anchorEl, open } = usePopOver()

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
    <motion.header variants={stagger()} className={`landing_page_navbar ${navbarScrolled ? 'solid' : ''}`}>
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
              <ScrollLink to="home" smooth={true} duration={500}>
                <Link to="/">Home</Link>
              </ScrollLink>

            </li>
            <li className={currentPath === "about-us" ? "active" : ""}>
              <ScrollLink to="about-us" smooth={true} duration={500}>
                <Link to="/">About</Link>
              </ScrollLink>
            </li>
            <li className={currentPath === "contact-us" ? "active" : ""}>
              <ScrollLink to="contact-us" smooth={true} duration={500}>
                <Link to="/">Contact Us</Link>
              </ScrollLink>
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
          <>
            <button
              className="landing_page_navbar_right-signup_button button"
              aria-describedby={id}
              onClick={handleClick}
            >
              Sign Up
            </button>

            <SignUpOptionsPopver
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              anchorEl={anchorEl}
              handleClose={handleClose}
              id={id!}
              open={open}
            />

          </>
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
