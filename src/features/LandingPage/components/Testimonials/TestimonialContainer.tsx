import ScrollAnimation from 'react-animate-on-scroll'
import { testimonials } from '../../data/testimonials'
import TestimonialCard from './TestimonialCard'
import './TestimonialStyles.scss'

export const TestimonialContainer = () => {

    return (
        <div className='testimonial'>

            <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} className="testimonial_heading_container">
                <p className='testimonial_sub_heading'>StuApt</p>
                <h1 className='testimonial_heading'>Amazing Remarks from Students.</h1>
            </ScrollAnimation>

            <div className="testimonial_container">
                <div className="testimonial_container_inner">
                    <div className="testimonial_grid">

                        {testimonials.map((testimonial, index) => {
                            const { message, name, role } = testimonial
                            return (
                                <ScrollAnimation animateIn="zoomIn" animateOnce={true} delay={index * 100}>
                                    <TestimonialCard
                                        key={index}
                                        message={message}
                                        name={name}
                                        role={role}
                                    />
                                </ScrollAnimation>
                            )
                        })}
                    </div>
                </div>
                <div className="testimonial_end_fader" />
            </div>

        </div>
    )
}






