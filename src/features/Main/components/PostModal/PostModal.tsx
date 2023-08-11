// import Firebase from "firebase";
import "./PostModalStyles.scss"; // Replace this with your CSS file
import CloseIcon from '../../../../assets/icons/close-icon.svg'
import Input, { TextArea } from "../../../../components/form/Input/Input";
import useCreateApartment from "../../hooks/useCreateApartment";
import { IApartment } from "../../../../interfaces/IApartment";
import { MdCloudUpload, MdDelete, } from 'react-icons/md'
import Button from "../../../../components/Button/Button";
import Checkbox from "../../../../components/form/Checkbox/Checkbox";
import FormError from "../../../../components/form/formError/FormError";
import FormSelect from "../../../../components/form/formSelect/FormSelect";
import { useState, useEffect } from "react";
import { IDropdownData } from "../../../../interfaces/IDropdownData";
import apartmentService from "../../../../services/apartmentService";
import { convertDataToDropdownData } from "../../../../utils/convertDataToDropdownData";

interface PostalModalProps {
    closeModal: () => void
}

function PostalModal(props: PostalModalProps) {
    const { apartmentForm, handleSubmit, handleChangeApartmentCategories, error, loading } = useCreateApartment(props.closeModal)
    const { form, formErrors, onChange: formOnChange, reset: resetForm } = apartmentForm
    // Managing post codes and their loading state
    const [postCodes, setPostCodes] = useState<{ data: IDropdownData[], loading: boolean }>({
        data: [],
        loading: false
    })

    const formChange = (key: keyof IApartment, value: any) => {
        formOnChange(key, value);
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

    // Fetching post codes on component mount
    const getPostCodes = async () => {
        setPostCodes({ ...postCodes, loading: true })
        try {
            const response = await apartmentService.getPostCodes()
            const postCodeDropdown = convertDataToDropdownData('postcode', '_id', response.data?.data,)
            setPostCodes({ ...postCodes, data: postCodeDropdown, loading: false })
        } catch (error) {
            console.log(error)
            setPostCodes({ ...postCodes, loading: false })
        }
    }

    useEffect(() => {
        getPostCodes()
    }, [])



    return (
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
                            <div className="price_ranges">
                                <div className="input-field">
                                    <Input
                                        id="location"
                                        label="Apartment Location"
                                        error={formErrors.location}
                                        animation="animate__animated animate__fadeInLeft"
                                        inputProps={{
                                            placeholder: "Location of the Apartment",
                                            value: form.location,
                                            onChange: (e) => formChange("location", e.target.value),
                                            required: true,
                                        }}
                                    />

                                </div>
                                <div className="input-field">

                                    <FormSelect
                                        id="postCode"
                                        name="apartment postcode"
                                        label="Post Code"
                                        error={formErrors.postCode}
                                        loading={postCodes.loading}
                                        options={postCodes.data}
                                        dropdownProps={{
                                            placeholder: "Select...",
                                            onChange: (item: IDropdownData) => {
                                                formOnChange('postCode', item.label)
                                            },
                                            required: true,
                                        }}
                                    />
                                </div>
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
                                            type: 'number',
                                            max: form.highestPrice
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
                                            type: 'number',
                                            min: form.lowestPrice
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
                                        type: 'number',
                                        min: 1
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
                            <label className={`custom-input__label img_label`}>
                                Apartment Image
                            </label>
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
                                            required
                                        />
                                    </label>
                                )}
                        </div>
                        <div>
                            <label className={`custom-input__label `}>
                                Apartment Type
                            </label>

                            <div className="post_modal_apartment_type">
                                <Checkbox
                                    label="Ensuite"
                                    checkboxProps={{
                                        name: 'checkbox',
                                        required: true,
                                        checked: form.categories.includes('ensuite'),
                                        onChange: () => handleChangeApartmentCategories('ensuite')
                                    }}
                                />
                                <Checkbox
                                    label="Apartment"
                                    checkboxProps={{
                                        name: 'checkbox',
                                        required: true,
                                        checked: form.categories.includes('apartment'),
                                        onChange: () => handleChangeApartmentCategories('apartment')
                                    }}
                                />

                            </div>
                        </div>
                        <FormError error={error?.message} />

                        <Button variant="contained" label='Create Apartment' width="50%" loading={loading} />

                    </form>

                </div>

            </div>
        </div>
    );
}


export default PostalModal

