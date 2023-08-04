import Button from '../../../components/Button/Button'
import Checkbox from '../../../components/form/Checkbox/Checkbox'
import FormMultiRangeSlider from '../../../components/form/formMultiRangeSlider/FormMultiRangeSlider'
import FormSelect from '../../../components/form/formSelect/FormSelect'
import './SocialMediaLayoutLeftSidebarStyles.scss'
const SocialMediaLayoutLeftSidebar = () => {
    const handleApplyFilters: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
    }
    return (
        <div className='social_media_layout_left_sidebar'>

            <>
                <div className="social_media_layout_left_sidebar_container">
                    <h2 className="social_media_layout_left_sidebar_container_header">Filters</h2>

                    <form className='social_media_layout_left_sidebar_form' onSubmit={handleApplyFilters}>
                        <h2 className="social_media_layout_left_sidebar_container_sub_header">Apartment Type:</h2>
                        <div className='social_media_layout_left_sidebar_item_container'>
                            <Checkbox label='Ensuite' />
                            <Checkbox label='Apartment' />
                        </div>

                        <h2 className="social_media_layout_left_sidebar_container_sub_header">No of Rooms:</h2>
                        <div className='social_media_layout_left_sidebar_item_container'>
                            <Checkbox label='Ensuite' />
                            <Checkbox label='Apartment' />
                        </div>

                        <h2 className="social_media_layout_left_sidebar_container_sub_header">Price Range:</h2>
                        <div className='social_media_layout_left_sidebar_item_container'>

                            <FormMultiRangeSlider
                                min={0}
                                max={1000}
                                onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
                            />
                        </div>


                        <h2 className="social_media_layout_left_sidebar_container_sub_header">Locations:</h2>
                        <div className=''>
                            <FormSelect
                                label="Apartment State"
                                name="state"
                                small
                                id='Apartment State'
                                error={null}
                                // loading={locationsLoading}
                                options={[]}
                                isMulti
                            />
                        </div>

                        <Button label='Apply Filter' buttonClassName='filter_submit' variant='contained' />

                    </form>


                </div>
            </>

        </div>
    )
}

export default SocialMediaLayoutLeftSidebar