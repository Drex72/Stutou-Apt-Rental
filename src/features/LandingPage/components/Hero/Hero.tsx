import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
import './Herostyles.scss'
import { HeroImage } from "../../../../utils/getImageLinksFromApi";
import { motion } from 'framer-motion'
import { useNavigate } from "react-router-dom";
import { AllRouteConstants } from "../../../../router/RouteConstants";
import { TextSequence } from "../Letter";
import LandingPageNavbar from "../../../../layouts/LandingPageLayout/LandingPageNavbar/LandingPageNavbar";

const HeroSliders = ({ images }: { images: HeroImage[] }) => {
    const navigate = useNavigate()

    const firstNameLetters = ["Discover", "Your", "Ideal", "Accommodation."];

    return (
        <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
        >
            <HeroSlider
                height={"100vh"}
                autoplay={{
                    autoplayDuration: 5000,
                }}
                controller={{
                    initialSlide: 1,
                    slidingDuration: 500,
                    slidingDelay: 100,

                }}
                accessibility={{
                    shouldDisplayButtons: false,
                    orientation: 'vertical'
                }}

            >
                <Overlay className="hero-overlay">
                    <nav></nav>
                    <LandingPageNavbar sidebarOpened={false} openSideBar={() => console.log('hey')} />
                    <div className="hero_content_container">
                        <div>
                            <h1 className="hero_heading">
                                <TextSequence words={firstNameLetters} className="first" />
                            </h1>
                            <p className="hero_tagline">Uncover the Perfect Home Away From Home for Your Stay.Start your search now and discover the ideal accommodation for your stay in Aberdeen. Your dream stay awaits</p>

                            <button
                                onClick={() => navigate(AllRouteConstants.auth.login)}
                                className="hero_button"
                            >
                                Explore
                            </button>
                        </div>
                    </div>
                </Overlay>

                {images.map((image, index) => (
                    <Slide
                        label={image.description}
                        key={index}
                        background={{
                            backgroundAnimation: 'zoom',
                            backgroundImageSrc: image.url,

                        }}
                    />

                ))}
            </HeroSlider>
        </motion.div>
    );
};

export default HeroSliders;
