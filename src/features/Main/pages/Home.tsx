import { useState } from 'react'
import ApartmentContainer from '../components/Posts/ApartmentContainer'
import PostalModal from '../components/PostModal/PostModal'

export const Home = () => {

  const [createApartment, setCreateApartment] = useState(false)
  const openCreateApartment = () => {
    setCreateApartment(true)
  }

  return (
    <div>
      {createApartment && <PostalModal closeModal={() => setCreateApartment(false)} />}

      <ApartmentContainer openCreateApartment={openCreateApartment} />
    </div>
  )
}
