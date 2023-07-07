import "./LandingPageNavbarStyles.scss";
import { motion } from "framer-motion";
import Animations from "../../../utils/Animations";
import Logo from "../../../assets/platform-logo.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Hamburger from "hamburger-react";
import { AllRouteConstants } from "../../../router/RouteConstants";

interface ILandingPageNavbar {
  openSideBar: () => void;
  sidebarOpened: boolean;
}

const LandingPageNavbar = (props: ILandingPageNavbar) => {
  const { sidebarOpened, openSideBar } = props;
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const currentPath = pathname.split("/")[1];

  const { stagger, fadeInUp, btnGroup } = new Animations();

  const goToLogin = () =>
    navigate(AllRouteConstants.landingPage.index);
  const goToSignup = () => navigate(AllRouteConstants.landingPage.index);

  return (
    <motion.header variants={stagger()} className="landing_page_navbar">
      <nav className="landing_page_navbar-container">
        <motion.div
          className="landing_page_navbar_left"
          initial="initial"
          animate="animate"
          variants={fadeInUp()}
        >
          <div className="logo_wrapper">
            <img src={Logo} alt="logo" />
          </div>

          <motion.ul
            initial="initial"
            className="landing_page_navbar_left-list_container"
            animate="animate"
            variants={stagger()}
          >
            <li className={currentPath === "" ? "active" : ""}>
              <Link to="/">Home</Link>
            </li>
            <li className={currentPath === "about-us" ? "active" : ""}>
              <Link to="/about-us">About</Link>
            </li>
            <li className={currentPath === "contact-us" ? "active" : ""}>
              <Link to="/contact-us">Contact Us</Link>
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
            to="https://d2surso6f0jxm9.cloudfront.net/auth/signin"
            className="landing_page_navbar_right-login_button button"
          >
            Log in
          </Link>
          <Link
            to="https://d2surso6f0jxm9.cloudfront.net/auth/signup"
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
