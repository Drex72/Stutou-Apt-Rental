import { useState } from "react";
import ReactPlayer from "react-player";
// import Firebase from "firebase";
import "./PostModalStyles.scss"; // Replace this with your CSS file
import PopModal from "../../../../layouts/ModalLayout/ModalLayout";
import CloseIcon from '../../../../assets/icons/close-icon.svg'
import DefaultUser from '../../../../assets/icons/user.svg'
import ShareImage from '../../../../assets/icons/share-image.svg'
import ShareVideo from '../../../../assets/icons/share-video.svg'
import DummyImage from '../../../../assets/images/dummyAvatar.png'
import Input, { TextArea } from "../../../../components/form/Input/Input";
import useCreateApartment from "../../hooks/useCreateApartment";
import { IApartment } from "../../../../interfaces/IApartment";
import FormSelect from "../../../../components/form/formSelect/FormSelect";

import { MdFastfood, MdCloudUpload, MdDelete, MdFoodBank, MdAttachMoney } from 'react-icons/md'
import Button from "../../../../components/Button/Button";

interface PostalModalProps {
    closeModal: () => void
}

function PostalModal(props: PostalModalProps) {
    const { apartmentForm, handleSubmit } = useCreateApartment()
    const { form, formErrors, onChange, reset: resetForm } = apartmentForm


    const formChange = (key: keyof IApartment, value: any) => {
        onChange(key, value);
        return;
    };

    const reset = () => {
        resetForm()
        props.closeModal();
    };

    function handleImage(event: React.ChangeEvent<HTMLInputElement>) {
        const image = event.target.files?.[0] || null;

        if (image === null) {
            alert("Not an image. This file is not supported.");
            return;
        }
        formChange('image', image)
    }

    const handleDeleteImage = () => {
        formChange('image', null)
    }


    return (
        // <PopModal onClose={() => console.log('hey')} fullOverlay >
        <div className="post_modal_container" >
            <div className="post_modal_content">

                <div className="post_modal_header">
                    <h2>Create an Apartment</h2>

                    <button onClick={reset}>
                        <img src={CloseIcon} alt="" />
                    </button>
                </div>

                <div className="post_modal_shared-content">
                    <form onSubmit={handleSubmit}>
                        <div className="post_modal_form_inputs">
                            <div className="input-field">
                                <Input id="name"
                                    label="Apartment Name"
                                    error={formErrors.name}
                                    animation="animate__animated animate__fadeInLeft"
                                    inputProps={{
                                        placeholder: "Give any Catchy Name to the Apartment",
                                        value: form.name,
                                        onChange: (e) => formChange("name", e.target.value),
                                        required: true,
                                    }}
                                />
                            </div>
                            <div className="input-field">
                                <FormSelect
                                    id="location"
                                    name="apartment location"
                                    options={[]}
                                    label="Apartment Location"
                                    error={formErrors.name}
                                    dropdownProps={{
                                        placeholder: "Give any Catchy Name to the Apartment",
                                        // value: form.name,
                                        // onChange: (e) => formChange("name", e.target.value),
                                        required: true,
                                    }}
                                />
                            </div>

                            <div className="price_ranges">
                                <div className="input-field">
                                    <Input
                                        id="lowest Rent"
                                        label="Lowest Rent"
                                        error={formErrors.lowestPrice}
                                        animation="animate__animated animate__fadeInLeft"
                                        inputProps={{
                                            placeholder: "30",
                                            value: form.lowestPrice,
                                            onChange: (e) => formChange("lowestPrice", e.target.value),
                                            required: true,
                                            type: 'number'
                                        }}
                                    />
                                </div>
                                <div className="input-field">
                                    <Input
                                        id="Highest Rent"
                                        label="Highest Rent"
                                        error={formErrors.highestPrice}
                                        animation="animate__animated animate__fadeInLeft"
                                        inputProps={{
                                            placeholder: "30",
                                            value: form.highestPrice,
                                            onChange: (e) => formChange("highestPrice", e.target.value),
                                            required: true,
                                            type: 'number'
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="input-field">
                                <Input
                                    id="amount of rooms"
                                    label="Amount of Rooms"
                                    error={formErrors.rooms}
                                    animation="animate__animated animate__fadeInLeft"
                                    inputProps={{
                                        placeholder: "3",
                                        value: form.rooms,
                                        onChange: (e) => formChange("rooms", e.target.value),
                                        required: true,
                                        type: 'number'
                                    }}
                                />
                            </div>
                        </div>
                        <TextArea
                            id='description'
                            label="Apartment Description"
                            error={formErrors.description}
                            rows={5}
                            animation="animate__animated animate__fadeInLeft"
                            textareaProps={{
                                placeholder: "Description of the Apartment",
                                value: form.description,
                                onChange: (e) => formChange("description", e.target.value),
                                required: true,
                            }}
                        />

                        <div className="post_modal_upload-image">
                            {form.image ?
                                <div className="uploaded_image_container">
                                    <button
                                        className="delete_icon "
                                        onClick={handleDeleteImage}
                                    >
                                        <MdDelete className="text-white" />
                                    </button>
                                    <img src={URL.createObjectURL(form.image)} alt="" />
                                </div>
                                : (
                                    <label>
                                        <div className="upload_icon_container">
                                            <MdCloudUpload className="upload_icon" />
                                            <p className="upload_text">Click here to upload</p>
                                        </div>
                                        <input
                                            type="file"
                                            name="uploadimage"
                                            accept="image/gif, image/jpeg, image/png"
                                            onChange={handleImage}
                                            className="upload_input"
                                        />
                                    </label>
                                )}
                        </div>

                        <Button variant="contained" label='Create Apartment' width="50%" />

                    </form>

                </div>

            </div>
        </div>
        // </PopModal>
    );
}


export default PostalModal

