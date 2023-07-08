import React from "react";
import "./LandingPageFooterStyles.scss";
import { Link } from "react-router-dom";
import Logo from "../../../components/Logo/Logo";
import { SocialIcon } from "react-social-icons";
import { AllRouteConstants } from "../../../router/RouteConstants";
import { Link as ScrollLink } from 'react-scroll';


const Footer = () => {
  return (
    <div className="footer animate__animated">
      <div className="footer_inner_container">
        <div className="footer_inner_container_rows">
          <Link to="/" className="footer_logo_container">
            <Logo dark />
          </Link>
          <div className="footer_inner_container_column">
            <h5>Account</h5>
            <li className="list_item">
              <a href={AllRouteConstants.auth.signup.student}>Create an Account</a>
            </li>

            <li className="list_item">
              <a href={AllRouteConstants.auth.login}>Login</a>
            </li>

            <li className="list_item">
              <a href="/#">Customer Care</a>
            </li>
          </div>
          <div className="footer_inner_container_column">
            <h5>Services</h5>
            <li className="list_item">
              <a href="/signup">Find a pet care Provider</a>
            </li>

            <li className="list_item">
              <a href="/login">Book Appointment</a>
            </li>

            <li className="list_item">
              <a href="/#">Customer Care</a>
            </li>
          </div>

          <div className="footer_inner_container_column">
            <h5>Company</h5>
            <li className="list_item">
              <ScrollLink to="about-us" smooth={true} duration={500}>
                <Link to="/">About Us</Link>
              </ScrollLink>
            </li>
            <li className="list_item">
              <ScrollLink to="contact-us" smooth={true} duration={500}>
                <Link to="/">Contact Us</Link>
              </ScrollLink>
            </li>
          </div>
          <div className="footer_inner_container_column">
            <h5>Socials</h5>
            <li className="list_item social_list_item">
              <div className="icon">
                <SocialIcon url="https://facebook.com/petCareConnect" />
              </div>

              <a href="#">Facebook</a>
            </li>

            <li className="list_item social_list_item">
              <div className="icon">
                <SocialIcon url="https://instagram.com/petCareConnect" />
              </div>

              <a href="#">Instagram</a>
            </li>
            <li className="list_item social_list_item">
              <div className="icon">
                <SocialIcon url="https://twitter.com/petCareConnect" />
              </div>

              <a href="#">Twitter</a>
            </li>
          </div>
        </div>

        <div className="footer_inner_container_foot">
          <p>Privacy Policy</p>
          <p>Terms and Condition</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;