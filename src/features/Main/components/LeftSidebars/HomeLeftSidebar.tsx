// Importing necessary dependencies and components from React and other sources
import { useEffect, useState } from 'react'
import Button from '../../../../components/Button/Button'
import Checkbox from '../../../../components/form/Checkbox/Checkbox'
import FormMultiRangeSlider from '../../../../components/form/formMultiRangeSlider/FormMultiRangeSlider'
import FormSelect from '../../../../components/form/formSelect/FormSelect'
import useFilterApartment from '../../hooks/useFilterApartment'
import './LeftSidebarStyles.scss'
import { useApartmentActions } from '../../../../hooks/useReduxActions'
import { IApartmentFilter } from '../../../../interfaces/IApartment'
import Input from '../../../../components/form/Input/Input'
import { useAppSelector } from '../../../../hooks/useAppSelector'
import { findMinMaxApartmentPrices } from '../../../../utils/findMinMaxApartmentPrices'
import apartmentService from '../../../../services/apartmentService'
import { IDropdownData } from '../../../../interfaces/IDropdownData'
import { convertDataToDropdownData } from '../../../../utils/convertDataToDropdownData'

// Defining the main component
const HomeLeftSidebar = () => {
    // Using custom Redux actions and selectors
    const { clearApartmentFilters } = useApartmentActions()
    const { filteredApartments, allApartments } = useAppSelector(state => state.apartments)

    // Managing filter state and prices state
    const [hasFilterBeenApplied, setHasFilterBeenApplied] = useState(false)
    const [prices, setPrices] = useState({
        minPrice: 0,
        maxPrice: 0
    })

    // Using a custom hook for apartment filtering
    const { apartmentFilterForm, handleFilterApartments } = useFilterApartment(() => setHasFilterBeenApplied(true))
    const { form, onChange, formErrors } = apartmentFilterForm

    // Managing post codes and their loading state
    const [postCodes, setPostCodes] = useState<{ data: IDropdownData[], loading: boolean }>({
        data: [],
        loading: false
    })

    // Handler for form changes
    const formChange = (key: keyof IApartmentFilter, value: any) => {
        onChange(key, value);
        return;
    };

    // Fetching min and max prices for the filtered apartments
    useEffect(() => {
        const minMaxPrices = findMinMaxApartmentPrices(filteredApartments)
        setPrices({
            minPrice: minMaxPrices.lowestPrice,
            maxPrice: minMaxPrices.highestPrice
        })
    }, [filteredApartments])

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

    // Rendering the filter UI and applying/removing filters
    return (
        <div className="social_media_layout_left_sidebar_container animate__animated animate__fadeIn">
            {/* Header for the filter section */}
            <h2 className="social_media_layout_left_sidebar_container_header">Filters</h2>

            {/* Form for filtering apartments */}
            <form className='social_media_layout_left_sidebar_form' onSubmit={handleFilterApartments}>
                {/* Apartment Type filter */}
                <h2 className="social_media_layout_left_sidebar_container_sub_header">Apartment Type:</h2>
                <div className='social_media_layout_left_sidebar_item_container'>
                    <Checkbox label='Ensuite' />
                    <Checkbox label='Apartment' />
                </div>

                {/* Number of Rooms filter */}
                <div className='social_media_layout_left_sidebar_item_container' style={{ marginTop: '1em' }}>
                    <div className="auth-field">
                        <Input
                            id="noofRooms"
                            label="Number of Rooms"
                            error={formErrors.noOfRooms!}
                            inputProps={{
                                placeholder: "3",
                                value: form.noOfRooms,
                                onChange: (e) => formChange("noOfRooms", e.target.value),
                            }}
                        />
                    </div>
                </div>

                {/* Price Range filter */}
                <h2 className="social_media_layout_left_sidebar_container_sub_header">Price Range:</h2>
                <div className='social_media_layout_left_sidebar_item_container'>
                    <FormMultiRangeSlider
                        min={prices.minPrice}
                        max={prices.maxPrice}
                        onChange={({ min, max }) => {
                            formChange('lowestPrice', min)
                            formChange('highestPrice', max)
                        }}
                    />
                </div>

                {/* Post Code filter */}
                <h2 className="social_media_layout_left_sidebar_container_sub_header">Post Code:</h2>
                <div className=''>
                    <FormSelect
                        label=""
                        name="state"
                        small
                        id='Apartment State'
                        error={null}
                        loading={postCodes.loading}
                        options={postCodes.data}
                        dropdownProps={{
                            onChange: (item: IDropdownData[]) => {
                                item.map((elem) => {
                                    onChange('postCode', [...form.postCode!, elem.label])
                                })
                            }
                        }}
                        isMulti
                    />
                </div>

                {/* Verification Status filter */}
                <div className="auth-field">
                    <p className="auth_user_type-label">Verification Status </p>
                    <div className="auth_login_checkboxes">
                        <Input
                            id="isVerified"
                            label="Verified"
                            error={formErrors.isVerified!}
                            inputProps={{
                                onChange: () => formChange('isVerified', true),
                                type: "radio",
                                name: "isVerified",
                            }}
                        />
                        <Input
                            id="student"
                            label="Not Verified"
                            error={formErrors.isVerified!}
                            inputProps={{
                                onChange: () => formChange('isVerified', false),
                                type: "radio",
                                name: "isVerified",
                            }}
                        />
                    </div>
                </div>

                {/* Button to apply and remove filters */}
                <div className='left_sidebar_button_container'>
                    <Button label='Apply Filter' disable={!allApartments.length} buttonClassName='filter_submit' variant='contained' />

                    {hasFilterBeenApplied && (
                        <Button
                            label='Remove Filter'
                            type='button'
                            buttonClassName='filter_submit'
                            animation='animate__animated animate__fadeIn'
                            onClick={() => {
                                clearApartmentFilters()
                                setHasFilterBeenApplied(false)
                            }}
                            variant='outlined'
                        />
                    )}
                </div>
            </form>
        </div>
    )
}

// Exporting the component as default
export default HomeLeftSidebar
