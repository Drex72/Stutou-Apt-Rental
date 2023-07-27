
import { Outlet } from "react-router-dom";
import "./SocialMediaLayoutStyles.scss";
import { useAppSelector } from "../../hooks/useAppSelector";
import SocialMediaLayoutNavbar from "./SocialMediaLayoutNavbar/SocialMediaLayoutNavbar";
import { RequireAuth } from "../../HoC/RequireAuth";
import SocialMediaLayoutRightSidebar from "./SocialMediaLayoutRightSidebar/SocialMediaLayoutRightSidebar";
import SocialMediaLayoutLeftSidebar from "./SocialMediaLayoutLeftSidebar/SocialMediaLayoutLeftSidebar";
import MessageBar from "../../features/Main/components/MessageBar/MessageBar";

function SocialMediaLayout() {
    const { messageStatus } = useAppSelector(state => state.messages)


    return (
        <RequireAuth>
            <div className="social_media_layout_body">
                <SocialMediaLayoutNavbar />
                <div className="social_media_layout_body_container">
                    <SocialMediaLayoutLeftSidebar />
                    <div className="social_media_layout_outlet_container">
                        <Outlet />
                    </div>
                    <SocialMediaLayoutRightSidebar />
                </div>
                <MessageBar />
            </div>
        </RequireAuth>
    );
}

export default SocialMediaLayout;
