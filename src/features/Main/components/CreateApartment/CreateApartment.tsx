import './CreateApartmentStyles.scss'
import DummyImage from '../../../../assets/images/dummyAvatar.png'

interface ICreateApartment {
    createApartmentHandler: () => void
}

const CreateApartment = ({ createApartmentHandler }: ICreateApartment) => {
    return (
        <div className='create_apartment'>
            <div>
                <img src={DummyImage} alt="" />
                <button onClick={createApartmentHandler} >
                    Start a post
                </button>
            </div>

        </div>

    )
}

export default CreateApartment