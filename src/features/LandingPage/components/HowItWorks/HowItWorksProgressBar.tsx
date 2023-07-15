import ScrollAnimation from 'react-animate-on-scroll'
import './HowItWorkStyles.scss'

interface IHowItWorksProgress {
    icon: any
    title: string
    content: string
    delay: number
}
interface IHowItWorksProgressProps {
    content: IHowItWorksProgress[]
}

const HowItWorksProgressBar = (props: IHowItWorksProgressProps) => {

    const { content } = props
    return (
        <div>

            <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                <ol className="how_it_works_progressBar">
                    {content.map((item, index) => (
                        <li key={index} className="how_it_works_progressBar-step is-complete">
                            <svg className="how_it_works_progressBar-icon">
                                <use xlinkHref="#checkmark-bold" />
                            </svg>
                        </li>
                    ))}
                </ol>
            </ScrollAnimation>


            <div className="how_it_works_progressCard">
                {content.map((item, index) => {
                    const { content, icon, title ,delay} = item
                    return (
                        (
                            <ScrollAnimation animateIn="fadeInUp" delay={delay} animateOnce={true}>
                                <div className='card' key={index}>
                                    <div className="card_inner_container">
                                        <div className="how_it_works_progressCard-icon">
                                            {icon}
                                        </div>
                                        <h2 className="how_it_works_progressCard-heading">{title}</h2>
                                        <p className="how_it_works_progressCard-content">{content}</p>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        )
                    )
                })}
            </div>
            <svg xmlns="http://www.w3.org/2000/svg">
                <symbol id="checkmark-bold" viewBox="0 0 24 24">
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                </symbol>
            </svg>
        </div>
    )
}

export default HowItWorksProgressBar