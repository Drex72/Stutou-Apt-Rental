
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./SocialMediaLayoutStyles.scss";
import useApi from "../../hooks/useApi";
import { useAppSelector } from "../../hooks/useAppSelector";
import { usePostActions } from "../../hooks/useReduxActions";
import postService from '../../services/postService'
import { apartmentPosts } from '../../features/Main/data/posts'
import SocialMediaLayoutNavbar from "./SocialMediaLayoutNavbar/SocialMediaLayoutNavbar";
import { RequireAuth } from "../../HoC/RequireAuth";
import { IGetPostResponse } from "../../interfaces/IPost";
import PageLoader from "../../components/PageLoader/PageLoader";
import SocialMediaLayoutRightSidebar from "./SocialMediaLayoutRightSidebar/SocialMediaLayoutRightSidebar";
import SocialMediaLayoutLeftSidebar from "./SocialMediaLayoutLeftSidebar/SocialMediaLayoutLeftSidebar";

function SocialMediaLayout() {
    const [noPosts, setNoPosts] = useState(false);

    const { allPosts } = useAppSelector((state) => state.posts);
    const { initializePosts } = usePostActions();

    const getAllPostsService = () => postService.getAllPosts();

    const getAllPostsRequest = useApi<IGetPostResponse, null>(
        getAllPostsService
    );

    const getAllPosts = async () => {
        getAllPostsRequest.reset();
        try {
            const posts = await getAllPostsRequest.request();
            if (!posts?.data.length) {
                setNoPosts(true);
            } else {
                initializePosts(posts.data);
            }
        } catch (error) { }
    };

    useEffect(() => {
        if (!allPosts.length) {
            // getAllPosts();
            initializePosts(apartmentPosts)
        }
    }, []);
    return (
        <RequireAuth>
            {getAllPostsRequest.loading ? (
                <PageLoader />
            ) : (
                <div className="social_media_layout_body">
                    <SocialMediaLayoutNavbar />
                    <div className="social_media_layout_body_container">
                        <SocialMediaLayoutLeftSidebar />
                        <div className="social_media_layout_outlet_container">
                            <Outlet />
                        </div>
                        <SocialMediaLayoutRightSidebar />
                    </div>
                </div>
            )}
        </RequireAuth>
    );
}

export default SocialMediaLayout;
