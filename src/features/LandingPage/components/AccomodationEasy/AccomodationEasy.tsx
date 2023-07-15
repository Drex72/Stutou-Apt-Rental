import ScrollAnimation from "react-animate-on-scroll";
import './AccomodationEasyStyles.scss'
import Houses from '../../../../assets/images/houses.png'

export const AccomodationEasy = () => {
    return (
        <div className="accomodation_easy">
            <div className="accomodation_easy_container">
                <div className="accomodation_easy_left">
                    <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} className="accomodation_easy_heading_container">
                        <p className='accomodation_easy_sub_heading'>StuApt</p>
                        <h1 className='accomodation_easy_heading'>Accomodation Made Easy</h1>
                    </ScrollAnimation>


                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true} className="accomodation_easy_left_content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt necessitatibus tempore aliquid quas ad quidem voluptatum fugiat aperiam voluptate harum libero error maxime, debitis accusantium quis natus facilis alias laudantium tempora itaque aliquam quam? Autem sapiente necessitatibus magni vero nisi nihil, aspernatur mollitia esse obcaecati modi cumque in corrupti eveniet cum quas perferendis nostrum reprehenderit fugiat natus molestiae alias ratione repudiandae accusamus? Totam quasi excepturi similique corrupti. Enim modi provident ratione quibusdam, rem perferendis neque dolores earum eveniet officia nesciunt quidem accusamus quis eligendi laborum fugiat nobis optio ab amet? Deserunt ducimus blanditiis odio eveniet earum rerum accusantium praesentium voluptatum.
                    </ScrollAnimation>

                </div>
                <ScrollAnimation animateIn="zoomIn" animateOnce={true} className="accomodation_easy_right">
                    <div className="accomodation_easy_right_image_container">

                        <img src={Houses} alt="houses" />
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    );
};
