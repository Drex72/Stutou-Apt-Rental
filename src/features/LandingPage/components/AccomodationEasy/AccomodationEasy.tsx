import ScrollAnimation from "react-animate-on-scroll";
import './AccomodationEasyStyles.scss'
import Houses from '../../../../assets/images/houses2.png'

export const AccomodationEasy = () => {
    return (
        <div className="accomodation_easy">
            <div className="accomodation_easy_container">
                <div className="accomodation_easy_left">
                    <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} className="accomodation_easy_heading_container">
                        <p className='accomodation_easy_sub_heading'>StuApt</p>
                        <h1 className='accomodation_easy_heading'>Accomodation Made Easy</h1>
                    </ScrollAnimation>


                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true} className="accomodation_easy_left_content">
                        <p>
                            Welcome to StuApt, the ultimate platform for finding your perfect accommodation in Aberdeen. We make the process of finding your dream stay easy, efficient, and stress-free.
                            With our user-friendly interface, you can easily browse through a wide range of accommodations that suit your preferences and budget. Whether you're a student, a traveler, or a professional, we've got the ideal space for you.
                        </p>

                        <p>
                            StuApt ensures the authenticity of listings through a thorough verification process, providing you with peace of mind. Our secure payment system guarantees a safe and seamless transaction.

                            Find your home away from home with advanced search filters, allowing you to tailor your search to your exact needs. Whether it's a cozy apartment, a shared house, or a private studio, we have options to suit every lifestyle.

                            Our dedicated support team is here to assist you every step of the way, ensuring a delightful experience from search to booking.

                            Experience a hassle-free accommodation search in Aberdeen with StuApt. Start exploring now and discover your ideal stay with ease. Your dream accommodation awaits!"

                        </p>
                    </ScrollAnimation>

                </div>
                <ScrollAnimation animateIn="zoomIn" animateOnce={true} className="accomodation_easy_right">
                    <div className="accomodation_easy_right_image_container">

                        <img src={Houses} alt="houses" />
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    );
};
