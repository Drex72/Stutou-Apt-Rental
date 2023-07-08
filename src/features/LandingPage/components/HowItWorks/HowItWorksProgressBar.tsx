import './HowItWorkStyles.scss'

interface IHowItWorksProgress {
    icon: any
    title: string
    content: string
}
interface IHowItWorksProgressProps {
    content: IHowItWorksProgress[]
}

const HowItWorksProgressBar = (props: IHowItWorksProgressProps) => {

    const { content } = props
    return (
        <div>
            <ol className="how_it_works_progressBar">
                {content.map((item, index) => (

                    <li key={index} className="how_it_works_progressBar-step is-complete">
                        <svg className="how_it_works_progressBar-icon">
                            <use xlinkHref="#checkmark-bold" />
                        </svg>
                    </li>
                ))}
            </ol>

            <div className="how_it_works_progressCard">
                {content.map((item, index) => {
                    const { content, icon, title } = item
                    return (
                        (
                            <div className='card'>
                                <div className="card_inner_container">
                                    <div className="how_it_works_progressCard-icon">
                                        {icon}
                                    </div>
                                    <h2 className="how_it_works_progressCard-heading">{title}</h2>
                                    <p className="how_it_works_progressCard-content">{content}</p>
                                </div>
                            </div>
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