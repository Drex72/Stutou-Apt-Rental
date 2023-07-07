import "./LandingPageFooterStyles.scss";
import {
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const LandingPageFooter = () => {
  return (
    <div className="mb_landing_page_footer">
      <div className="mb_landing_page_footer-top_content">
        <h3 className="mb_landing_page_footer-top_content_header">
          Mobilearning
        </h3>
        <div className="mb_landing_page_footer-top_content_icon_container">
          <div className="icon_bg">
            <AiFillInstagram className="icon" />
          </div>
          <div className="icon_bg">
            <FaFacebookF className="icon" />
          </div>
          <div className="icon_bg">
            <AiOutlineTwitter className="icon" />
          </div>
        </div>
      </div>
      <div className="border"></div>
      <ul className="mb_landing_page_footer-bottom_content">
        <li>Terms of Service</li>
        <li>Cookie Policy</li>
        <li>Faq</li>
        <li>Support</li>
      </ul>
    </div>
  );
};

export default LandingPageFooter;
