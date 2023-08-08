import ApartmentSkeletonLoader from "../../../../components/SkeletonLoaders/ApartmentSkeletonLoader";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { apartmentPosts } from "../../data/posts";
import CreateApartment from "../CreateApartment/CreateApartment";
import ApartmentMini from "./ApartmentMini";

interface IApartmentsContainer {
    openCreateApartment: () => void
}

const ApartmentContainer = (props: IApartmentsContainer) => {
    const { openCreateApartment } = props
    const { userInfo } = useAppSelector(state => state.authentication)
    // const { data, error, loading } = useGetAllApartments()
    const loading  = false

    return (
        <div className="posts" style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
            {loading ? (
                <>
                    <ApartmentSkeletonLoader />
                    <ApartmentSkeletonLoader />
                    <ApartmentSkeletonLoader />
                    <ApartmentSkeletonLoader />
                    <ApartmentSkeletonLoader />

                </>
            ) : (
                <>
                    {userInfo.status === 'owner' && (
                        <CreateApartment createApartmentHandler={openCreateApartment} />
                    )}
                    {apartmentPosts.length === 0 && (
                        <>No Apartments</>
                    )}
                    {apartmentPosts.map((apartment, index) => (
                        <ApartmentMini apartment={apartment} key={index} />
                    ))}
                </>

            )}
        </div>
    );
};

export default ApartmentContainer;
