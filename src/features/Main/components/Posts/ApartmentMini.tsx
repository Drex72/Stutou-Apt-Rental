import { useNavigate } from 'react-router-dom'
import './ApartmentTwoStyles.scss'
import { useApartmentActions } from '../../../../hooks/useReduxActions'
import ApartmentTag from '../ApartmentTag/ApartmentTag'
import { IApartment } from '../../../../interfaces/IAPIResponse'

interface IApartmentMini {
  apartment: IApartment
}
const ApartmentMini = ({ apartment }: IApartmentMini) => {
  const { categories, description, highestPrice, image, location, lowestPrice, name, isVerified, _id, postCode } = apartment
  const navigate = useNavigate()
  const { selectApartment } = useApartmentActions()
  const handleApartmentClick = () => {
    navigate(`/main/apartments/${_id}`)
    selectApartment({ apartmentid: _id })
  }
  return (
    <div className='apartment_mini  animate__animated animate__fadeIn' onClick={handleApartmentClick}>
      <div className="apartment_mini_image_container">
        <img src={image} />
      </div>
      <div className="apartment_mini_text_container">
        <div className="inner_container">
          <div className="inner_container_top">
            <ApartmentTag variant={isVerified ? 'contained' : 'contained_disabled'} text={isVerified ? 'Verified' : 'UnVerified'} />
            <div className="save">save</div>
          </div>
          <div className="mid">
            <div className="mid_heading">
              <p>Offers Over</p>
              <h2 className="amount">
                £{lowestPrice} - £{highestPrice}
              </h2>
            </div>
            <div className="icons"></div>
            <div className="info">
              <h4 className='name'>{name}</h4>
              <p className="location">{location}</p>
              <p className="postCode">
                <span>Post Code</span>: {postCode}
              </p>
              <p className="description">{description}</p>
            </div>
          </div>
          <div className="bottom">
            <ApartmentTag variant='outlined_disabled' text={categories} />
            <p className="date">Listed on 5th Aug 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApartmentMini
