import LandingPageNavbar from '../../../layouts/LandingPageLayout/LandingPageNavbar/LandingPageNavbar'

export const AboutUs = () => {
    return (

        <div>
            <LandingPageNavbar heroPage={false} sidebarOpened={false} openSideBar={() => console.log('hey')} />
            Hello
        </div>
    )
}

