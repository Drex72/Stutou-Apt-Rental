import "./PostStyles.scss";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import { useState } from "react";

interface IApartmentProps {
    apartment: IApartment
}
const Apartment = ({ apartment }: IApartmentProps) => {
    const { _id,categories,description,highestPrice,image,location,lowestPrice,name,rooms } = apartment
    // const { avatar, firstName, id: userId } = userInfo
    const [commentOpen, setCommentOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <div className="post">
            <div className="container">
                <div className="user">
                    <div className="userInfo">
                        {/* <img src={avatar} alt="" /> */}
                        <div className="details">
                            <Link
                                to={`/profile/`}
                                style={{ textDecoration: "none", color: "inherit" }}
                            >
                                <span className="name">
                                    {/* {firstName} */}
                                    Okunoyr David

                                </span>
                            </Link>
                            {/* <span className="date">{moment(post.createdAt).fromNow()}</span> */}
                        </div>
                    </div>
                    <MoreHorizIcon onClick={() => setMenuOpen(!menuOpen)} />
                    <button >delete</button>

                </div>
                <div className="content">
                    <p>{description}</p>
                    {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, dolores. Iste reiciendis eum sed delectus velit! Ad, eum cumque dolore illum, ut numquam esse quo sed eos, quia eius provident!</p> */}
                    <img src={image!} alt="" />
                </div>
                <div className="info">
                    <div className="item">
                        <FavoriteOutlinedIcon
                            style={{ color: "red" }}
                        />
                        11 Likes
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

export default Apartment;
