import "./PostStyles.scss";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IPost } from "../../../../interfaces/IPost";

interface IPostProps {
    post: IPost
}
const Post = ({ post }: IPostProps) => {
    const { id, desc, img, userInfo, likes } = post
    const { avatar, firstName, id: userId } = userInfo
    const [commentOpen, setCommentOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <div className="post">
            <div className="container">
                <div className="user">
                    <div className="userInfo">
                        <img src={avatar} alt="" />
                        <div className="details">
                            <Link
                                to={`/profile/${userId}`}
                                style={{ textDecoration: "none", color: "inherit" }}
                            >
                                <span className="name">{firstName}</span>
                            </Link>
                            {/* <span className="date">{moment(post.createdAt).fromNow()}</span> */}
                        </div>
                    </div>
                    <MoreHorizIcon onClick={() => setMenuOpen(!menuOpen)} />
                    <button >delete</button>

                </div>
                <div className="content">
                    <p>{desc}</p>
                    <img src={img} alt="" />
                </div>
                <div className="info">
                    <div className="item">
                        <FavoriteOutlinedIcon
                            style={{ color: "red" }}
                        />
                        {likes} Likes
                    </div>
                    <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
                        <TextsmsOutlinedIcon />
                        See Comments
                    </div>
                    <div className="item">
                        <ShareOutlinedIcon />
                        Share
                    </div>
                </div>
                {/* {commentOpen && <Comments postId={post.id} />} */}
            </div>
        </div>
    );
};

export default Post;
