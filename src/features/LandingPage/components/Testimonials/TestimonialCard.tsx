import './TestimonialStyles.scss'

interface ITestimonialCard {
    message: string
    name: string
    role: string
}
const TestimonialCard = (props: ITestimonialCard) => {
    const { message, name, role } = props
    return (
        <div className="testimonial_card">
            <div className="testimonial_card_text_container" >
                <q>
                    {message}
                </q>
            </div>
            <div className="testimonial_card_img_container">
                <div className="testimonial_card_image_container">
                    <img
                        className="testimonial_card_image"
                        src="https://www.pngitem.com/pimgs/m/507-5077806_transparent-women-professional-business-woman-transparent-background-hd.png"
                        alt="altText of the image"
                        width={40}
                        height={40}
                        loading="lazy"
                    />
                </div>
                <div>
                    <p className="testimonial_image_text">
                        {name}
                    </p>
                    <p>{role}</p>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard