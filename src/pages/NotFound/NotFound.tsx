import { useNavigate } from "react-router-dom";
import NotFoundImage from "../../assets/images/404_Image.png";
import platformlogo from "../../assets/platform-logo.svg";
import "./NotFound.scss";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import { AllRouteConstants } from "../../router/RouteConstants";
import Message from "./Message/Message";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="not_found_container">
      <div className="not_found_left_container">
        <div className="not_found_left_inner_container">
          <div className="not_found_logo">
            <img src={platformlogo} alt="logo" />
          </div>
          <div className="not_found_headers_container">
            <section className="not_found_headers">
              <Header message="Oops!! You’ve found a page that doesn’t exist" />
              <Message
                message="Don’t you worry we got you,breathe in and out, then go back and try again."
                size="md"
              />
              <Button
                width="70%"
                label="Go to Home Page"
                variant="primary"
                onClick={() => navigate(AllRouteConstants.landingPage.index)}
              />
            </section>
          </div>
        </div>
      </div>
      <div className="not_found_right_container">
        <img src={NotFoundImage} alt="Not Found Image" />
      </div>
    </div>
  );
};

export default NotFound;
