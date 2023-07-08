import HowItWorksProgressBar from './HowItWorksProgressBar'
import { MdOutlineVerified, MdOutlineHandshake } from 'react-icons/md'
import { IoCreateOutline } from 'react-icons/io5'
import { PiHouseLineBold } from 'react-icons/pi'
import './HowItWorkStyles.scss'


const HowItWorks = () => {
    return (
        <div className='how_it_works'>
            <div className="how_it_works_container">
                <h4 className='how_it_works_container_sub_heading'>How it Works</h4>
                <h1 className='how_it_works_container_heading'>Uncover the Perfect Home Away From Home for Your Stay.</h1>

                <HowItWorksProgressBar content={
                    [
                        {
                            content: "Register effortlessly with our user-friendly form and customize your profile.",
                            icon: <IoCreateOutline />,
                            title: 'Create an Account'
                        },
                        {
                            content: 'Ensure the security of your account and unlock the full potential of our platform.',
                            icon: <MdOutlineVerified />,
                            title: 'Verify your Account'
                        },
                        {
                            content: 'Explore a wide range of available apartments that suit your preferences.',
                            icon: <PiHouseLineBold />,
                            title: 'Find An Apartment'
                        },
                        {
                            content: "Seamlessly connect with potential buyers and complete transactions hassle-free.",
                            icon: <MdOutlineHandshake />,
                            title: 'Transact with Buyer'
                        }
                    ]
                }
                />
            </div>
        </div>
    )
}

export default HowItWorks