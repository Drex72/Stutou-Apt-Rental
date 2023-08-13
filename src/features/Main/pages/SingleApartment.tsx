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
    const { selectedApartment } = useAppSelector(state => state.apartments)
    const { users } = useAppSelector((state) => state.users)
    const navigate = useNavigate()
    const { setLeftComponent } = useLayoutActions()

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
                <button className='single_apartment_header_back_button' onClick={() => navigate(AllRouteConstants.main.index)}><AiOutlineArrowLeft />Back to Apartments</button>
                <img src={selectedApartment?.image} alt='Apartment' />
            </div>
            <div className='single_apartment_header_tag_container'>
                <ApartmentTag variant={selectedApartment?.isVerified ? 'contained' : 'contained_disabled'} text={selectedApartment?.isVerified ? 'Verified' : 'UnVerified'} />
                <ApartmentTag variant='outlined_disabled' text={selectedApartment?.categories!} />
            </div>

            <div className="single_apartment_mid">
                <p className='price_range'>Price Range</p>
                <h2 className="amount">
                    £{selectedApartment?.lowestPrice} - £{selectedApartment?.highestPrice}
                </h2>

                <h3 className="apartment_name">{selectedApartment?.name}</h3>
                <p className="apartment_location">{selectedApartment?.location}, {selectedApartment?.postCode}</p>

            </div>
            <div className="single_apartment_description">

                <h2 className="single_apartment_description_heading">
                    Description
                </h2>
                <p className='single_apartment_description_text' >
                    {selectedApartment?.description}
                </p>
            </div>

        </div>
    )
}
