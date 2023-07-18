import './SocialMediaLayoutRightSidebarStyles.scss'

const SocialMediaLayoutRightSidebar = () => {
    return (
        <div className='social_media_layout_right_sidebar'>
            <div className="social_media_layout_right_sidebar_container">
                <div className="social_media_layout_right_sidebar_container_top">
                    <img
                        className="social_media_layout_right_sidebar_container_top_background"
                        src="https://www.aveliving.com/AVE/media/Property_Images/Florham%20Park/hero/flor-apt-living-(2)-hero.jpg?ext=.jpg"
                        alt="profile image"
                    />

                    <div className='social_media_layout_right_sidebar_container_top_avatar_container'>
                        <img className="social_media_layout_right_sidebar_container_top_avatar"
                            src="https://img.icons8.com/?size=512&id=12438&format=png"
                            alt="profile image"
                        />
                    </div>

                    <div className="social_media_layout_right_sidebar_container_top_headline">
                        <h2>Okunoye David</h2>
                        <p> A welcoming, friendly, and all-encompassing approach to enterprise software design!</p>
                    </div>

                <div className="social_media_layout_right_sidebar_container_discover">Discover more</div>
                </div>

            </div>
        </div>
    )
}

export default SocialMediaLayoutRightSidebar

