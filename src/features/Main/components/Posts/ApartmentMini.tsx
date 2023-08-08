import './ApartmentTwoStyles.scss'

interface IApartmentMini {
  apartment: IApartment
}
const ApartmentMini = ({ apartment }: IApartmentMini) => {
  const { categories, description, highestPrice, image, location, lowestPrice, name, isVerified } = apartment
  return (
    <div className='apartment_mini'>
      <div className="apartment_mini_image_container">
        <img src={image} />
      </div>
      <div className="apartment_mini_text_container">
        <div className="inner_container">
          <div className="inner_container_top">
            <span className={isVerified ? 'verified' : 'unVerified'}>{isVerified ? 'Verified' : 'UnVerified'}</span>
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
              <p className="description">{description}</p>
            </div>
          </div>
          <div className="bottom">
            <span>{categories}</span>
            <p className="date">Listed on 5th Aug 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApartmentMini
