import Checkbox from '../../../components/form/Checkbox/Checkbox'
import './SocialMediaLayoutLeftSidebarStyles.scss'
const SocialMediaLayoutLeftSidebar = () => {
    return (
        <div className='social_media_layout_left_sidebar'>
            <div className="social_media_layout_left_sidebar_container">
                <h2 className="social_media_layout_left_sidebar_mini_heading">
                    Category
                </h2>
                <Checkbox />
                <h2 className="social_media_layout_left_sidebar_mini_heading">
                    Rent
                </h2>
                <h2 className="social_media_layout_left_sidebar_mini_heading">
                    Rooms
                </h2>
                <h2 className="social_media_layout_left_sidebar_mini_heading">
                    Location
                </h2>
            </div>
        </div>
    )
}

export default SocialMediaLayoutLeftSidebar