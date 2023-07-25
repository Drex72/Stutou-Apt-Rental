import { useState } from "react";
import ReactPlayer from "react-player";
// import Firebase from "firebase";
import "./PostModalStyles.scss"; // Replace this with your CSS file
import PopModal from "../../../../layouts/ModalLayout/ModalLayout";
import CloseIcon from '../../../../assets/icons/close-icon.svg'
import DefaultUser from '../../../../assets/icons/user.svg'
import ShareImage from '../../../../assets/icons/share-image.svg'
import ShareVideo from '../../../../assets/icons/share-video.svg'
import ShareComment from '../../../../assets/icons/share-comment.svg'



interface User {
    photoURL?: string;
    displayName?: string;
}

interface PostalModalProps {
    showModal: string;
    user: User;
    clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
    postArticle: (payload: PostPayload) => void;
}

interface PostPayload {
    image: File | null;
    video: string;
    description: string;
    user: User;
    // timestamp: Firebase.firestore.Timestamp;
}

function PostalModal(props: PostalModalProps) {
    const [editorText, setEditorText] = useState("");
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [videoFile, setVideoFile] = useState("");
    const [assetArea, setAssetArea] = useState("");

    const reset = (event: React.MouseEvent<HTMLButtonElement>) => {
        setEditorText("");
        setImageFile(null);
        setVideoFile("");
        setAssetArea("");
        props.clickHandler(event);
    };

    function handleImage(event: React.ChangeEvent<HTMLInputElement>) {
        const image = event.target.files?.[0] || null;

        if (image === null) {
            alert("Not an image. This file is not supported.");
            return;
        }
        setImageFile(image);
    }

    function switchAssetArea(area: string) {
        setImageFile(null);
        setVideoFile("");
        setAssetArea(area);
    }

    // function postArticle(event: React.MouseEvent<HTMLButtonElement>) {
    //     event.preventDefault();
    //     if (event.target !== event.currentTarget) {
    //         return;
    //     }

    //     const payload: PostPayload = {
    //         image: imageFile,
    //         video: videoFile,
    //         description: editorText,
    //         user: props.user,
    //         timestamp: Firebase.firestore.Timestamp.now(),
    //     };

    //     props.postArticle(payload);
    //     reset(event);
    // }

    return (
        // <PopModal onClose={() => console.log('hey')} fullOverlay >
        <div className="post_modal_container">
            <div className="post_modal_content">
                <div className="post_modal_header">
                    <h2>Create a post</h2>
                    <button onClick={(event) => reset(event)}>
                        <img src={CloseIcon} alt="" />
                    </button>
                </div>
                <div className="post_modal_shared-content">
                    <div className="post_modal_user-info">

                        <img src={DefaultUser} alt="" />

                        <span>
                            Okunoye David
                        </span>
                    </div>
                    <div className="post_modal_editor">
                        <textarea
                            value={editorText}
                            onChange={(event) => setEditorText(event.target.value)}
                            placeholder="What do you want to talk about?"
                            autoFocus={true}
                        />

                        {assetArea === "image" && (
                            <div className="post_modal_upload-image">
                                <input
                                    type="file"
                                    accept="image/gif, image/jpeg, image/png"
                                    name="image"
                                    id="imageFile"
                                    onChange={handleImage}
                                    style={{ display: "none" }}
                                />
                                <p>
                                    <label htmlFor="imageFile">Select an image to share</label>
                                </p>
                                {imageFile && <img src={URL.createObjectURL(imageFile)} alt="" />}
                            </div>
                        )}

                        {assetArea === "video" && (
                            <>
                                <input
                                    type="text"
                                    name="video"
                                    id="videoFile"
                                    value={videoFile}
                                    placeholder="Enter the video link"
                                    onChange={(event) => setVideoFile(event.target.value)}
                                />
                                {videoFile && <ReactPlayer width={"100%"} url={videoFile} />}
                            </>
                        )}
                    </div>
                </div>
                <div className="post_modal_share-creation">
                    <div className="post_modal_attach-asset">
                        <button
                            className="post_modal_asset-button"
                            onClick={() => switchAssetArea("image")}
                        >
                            <img src={ShareImage} alt="" />
                        </button>
                        <button
                            className="post_modal_asset-button"
                            onClick={() => switchAssetArea("video")}
                        >
                            <img src={ShareVideo} alt="" />

                        </button>
                    </div>

                    <button
                        className={`post_modal_post-button ${!editorText ? "post_modal_post-button-disabled" : ""}`}
                        // onClick={(event) => postArticle(event)}
                        disabled={!editorText}
                    >
                        Post
                    </button>
                </div>
            </div>
        </div>
        // </PopModal>
    );
}


export default PostalModal

