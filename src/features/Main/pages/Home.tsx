// Importing necessary dependencies and components from React and other sources
import { useEffect, useState } from 'react'
import ApartmentContainer from '../components/Posts/ApartmentContainer'
import PostalModal from '../components/PostModal/PostModal'
import { useLayoutActions } from '../../../hooks/useReduxActions'
import HomeLeftSidebar from '../components/LeftSidebars/HomeLeftSidebar'

// Defining the Home component
export const Home = () => {
  // Managing state to control whether the create apartment modal is open or not
  const [createApartment, setCreateApartment] = useState(false)

  // Using custom Redux actions
  const { setLeftComponent } = useLayoutActions()

  // Function to open the create apartment modal
  const openCreateApartment = () => {
    setCreateApartment(true)
  }

  // Setting the left sidebar component when the component mounts
  useEffect(() => {
    setLeftComponent(<HomeLeftSidebar />)
  }, [])

  return (
    <div className='animate__animated animate__fadeIn'>
      {/* Conditionally rendering the create apartment modal */}
      {createApartment && <PostalModal closeModal={() => setCreateApartment(false)} />}

      {/* Rendering the ApartmentContainer component */}
      <ApartmentContainer openCreateApartment={openCreateApartment} />
    </div>
  )
}
