import LandingPageNavbar from '../../../layouts/LandingPageLayout/LandingPageNavbar/LandingPageNavbar'
import { FAQ } from '../components'
import { motion } from 'framer-motion'
import ContactUsImage from "../../../assets/images/contact-us-image.png";
import "../styles/contact_us_styles.scss";

export const AboutUs = () => {
    return (

        <div>
            <LandingPageNavbar heroPage={false} sidebarOpened={false} openSideBar={() => console.log('hey')} />
            <div className="mb_contact_us_content_wrapper" style={{ marginBlock: '2em' }}>
                <motion.div className="mb_contact_us_content_wrapper-left">
                    <motion.img
                        src={ContactUsImage}
                        alt="bg"
                        initial={{ x: -200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                    />
                </motion.div>
                <motion.div
                    className="mb_contact_us_content_wrapper-right"
                    initial={{ y: -300, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 0.5,
                        delay: 0.5,
                    }}
                >
                    <h2 className="mb_contact_us_content_wrapper-right_header">
                        About StuApt
                    </h2>
                    <section className='accomodation_easy_left_content'>

                        <p>Welcome to StuApt, the premier destination to discover your perfect accommodation in the charming city of Aberdeen. We take pride in simplifying the often daunting task of finding your dream stay, ensuring it's not just easy and efficient, but also entirely stress-free. Our mission is to be your trusted partner in your pursuit of a comfortable and suitable living space, tailored precisely to your desires.
                        </p>
                        <p>
                            Step into the world of StuApt, where we offer you a seamless and user-friendly interface that allows you to effortlessly explore an extensive array of accommodation options, each thoughtfully curated to match your unique preferences and budget considerations. It matters not whether you're a diligent student, a curious traveler yearning for new experiences, or a seasoned professional seeking a tranquil abode after a long day - we've meticulously designed our platform to cater to your distinct needs.
                        </p>
                        <p>
                            Anchored by an unwavering commitment to your peace of mind, StuApt meticulously verifies every listing through a comprehensive authentication process, ensuring that your new haven adheres to the highest standards of quality and safety. In a digital landscape rife with uncertainties, our secure payment system further fortifies your trust, guaranteeing a seamless and worry-free transaction.
                        </p>
                        <p>
                            Elevate your search with our advanced filters, a sophisticated toolset that empowers you to fine-tune your quest for the perfect abode. Whether your heart yearns for the snug embrace of an apartment, the camaraderie of a shared house, or the intimacy of a private studio, our diverse portfolio encompasses choices suited to a myriad of lifestyles.
                        </p>
                        <p>
                            And should you ever require guidance or assistance, rest assured that our dedicated support team stands ready to accompany you through every step of your journey, ensuring that your experience - from that initial tap on your screen to the moment you secure your accommodation - is marked by ease, satisfaction, and a sense of delight.
                        </p>

                    </section>

                </motion.div>
            </div>

            <FAQ />

        </div>
    )
}

