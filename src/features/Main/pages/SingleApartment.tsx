// Importing necessary dependencies and components from React and other sources
import { useEffect } from 'react'
import '../styles/single_apartment_styles.scss'
import { useAppSelector } from '../../../hooks/useAppSelector'
import SingleApartmentLeftSidebar from '../components/LeftSidebars/SingleApartmentLeftSidebar'
import { useLayoutActions } from '../../../hooks/useReduxActions'
import ApartmentTag from '../components/ApartmentTag/ApartmentTag'
import { useNavigate } from 'react-router-dom'
import { AllRouteConstants } from '../../../router/RouteConstants'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { getUserInformation } from '../../../utils/groupChatsByReceiver'

// Defining the SingleApartment component
export const SingleApartment = () => {
    // Using a custom Redux selector to access the selectedApartment from the state
    const { selectedApartment } = useAppSelector(state => state.apartments)
    const { users } = useAppSelector((state) => state.users)
    const navigate = useNavigate()
    // const { image, isVerified, categories, lowestPrice, highestPrice } = selectedApartment!
    // Using custom Redux actions
    const { setLeftComponent } = useLayoutActions()

    // Setting the left sidebar component when the component mounts
    useEffect(() => {
        setLeftComponent(<SingleApartmentLeftSidebar />)
        const currentUser = getUserInformation(users, selectedApartment?.owner!)

        if (!selectedApartment || !currentUser) {
            navigate(AllRouteConstants.main.index)
        }
    }, [])

    return (
        <div className="single_apartment animate__animated animate__fadeIn">
            <div className="single_apartment_header_image">
                <button className='single_apartment_header_back_button'><AiOutlineArrowLeft />Back to Apartments</button>
                <img src={selectedApartment?.image} alt='Apartment' />
            </div>
            <div className='single_apartment_header_tag_container'>
                <ApartmentTag variant={selectedApartment?.isVerified ? 'contained' : 'contained_disabled'} text={selectedApartment?.isVerified ? 'Verified' : 'UnVerified'} />
                <ApartmentTag variant='outlined_disabled' text={selectedApartment?.categories!} />
            </div>

            <div className="mid_heading">
                <p>Offers Over</p>
                <h2 className="amount">
                    £{selectedApartment?.lowestPrice} - £{selectedApartment?.highestPrice}
                </h2>
            </div>

        </div>
    )
}
