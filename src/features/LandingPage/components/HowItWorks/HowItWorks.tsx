import HowItWorksProgressBar from './HowItWorksProgressBar'
import { MdOutlineVerified, MdOutlineHandshake } from 'react-icons/md'
import { IoCreateOutline } from 'react-icons/io5'
import { PiHouseLineBold } from 'react-icons/pi'
import './HowItWorkStyles.scss'
import ScrollAnimation from 'react-animate-on-scroll'


export const HowItWorks = () => {
    return (
        <div className='how_it_works'>
            <div className="how_it_works_container">

                <ScrollAnimation animateIn="fadeIn" animateOnce={true} className='how_it_works_container_heading_container' >
                    <h4 className='how_it_works_container_sub_heading'>How it Works</h4>
                    <h1 className='how_it_works_container_heading'>Uncover the Perfect Home Away From Home for Your Stay.</h1>
                </ScrollAnimation>

                <HowItWorksProgressBar
                    content={
                        [
                            {
                                content: "Register effortlessly with our user-friendly form and customize your profile.",
                                icon: <IoCreateOutline />,
                                title: 'Create an Account',
                                delay: 200,
                            },
                            {
                                content: 'Ensure the security of your account and unlock the full potential of our platform.',
                                icon: <MdOutlineVerified />,
                                title: 'Verify your Account',
                                delay: 400,

                            },
                            {
                                content: 'Explore a wide range of available apartments that suit your preferences.',
                                icon: <PiHouseLineBold />,
                                title: 'Find An Apartment',
                                delay: 500,

                            },
                            {
                                content: "Seamlessly connect with potential buyers and complete transactions hassle-free.",
                                icon: <MdOutlineHandshake />,
                                title: 'Transact with Buyer',
                                delay: 600,

                            }
                        ]
                    }
                />
            </div>
        </div>
    )
}

