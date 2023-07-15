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
                <img
                    className="testimonial_card_image"
                    src="/images/Ante.jpeg"
                    alt="altText of the image"
                    width={40}
                    height={40}
                    loading="lazy"
                />
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