import { useAppSelector } from "../../../../hooks/useAppSelector";
import Post from "./Post";
// import "./posts.scss";

const PostContainer = () => {
    const { allPosts } = useAppSelector((state) => state.posts);

    return (
        <div className="posts" style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
            {allPosts.map((post, index) => (
                <Post post={post} key={index} />
            ))}
        </div>
    );
};

export default PostContainer;
