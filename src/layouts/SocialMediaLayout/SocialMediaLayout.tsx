
import { Outlet } from "react-router-dom";
import "./SocialMediaLayoutStyles.scss";
import SocialMediaLayoutNavbar from "./SocialMediaLayoutNavbar/SocialMediaLayoutNavbar";
import { RequireAuth } from "../../HoC/RequireAuth";
import SocialMediaLayoutRightSidebar from "./SocialMediaLayoutRightSidebar/SocialMediaLayoutRightSidebar";
import useGetUserInfo from "../../features/Main/hooks/useGetUserInfo";
import { useAppSelector } from "../../hooks/useAppSelector";
import PageLoader from "../../components/PageLoader/PageLoader";
import MessageBar from "../../features/Main/components/MessageBar/MessageBar";

function SocialMediaLayout() {
    const { loading } = useGetUserInfo()
    const { leftComponent } = useAppSelector(state => state.layout)

    return (
        <RequireAuth>
            {loading ? (
                <PageLoader />
            ) : (
                <div className="social_media_layout_body">
                    <SocialMediaLayoutNavbar />
                    <div className="social_media_layout_body_container">
                        <div className="social_media_layout_body_left_container">
                            <div className="inner_container">
                                {leftComponent}
                            </div>
                        </div>
                        <div className="social_media_layout_outlet_container">
                            <Outlet />
                        </div>
                        <SocialMediaLayoutRightSidebar />
                    </div>
                    <MessageBar />
                </div>
            )}
        </RequireAuth>
    );
}

export default SocialMediaLayout;
