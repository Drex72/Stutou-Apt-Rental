import ApartmentSkeletonLoader from "../../../../components/SkeletonLoaders/ApartmentSkeletonLoader";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import useGetAllApartments from "../../hooks/useGetAllApartments";
import CreateApartment from "../CreateApartment/CreateApartment";
import Apartment from "./Apartment";
// import "./posts.scss";

interface IApartmentsContainer {
    openCreateApartment: () => void
}

const ApartmentContainer = (props: IApartmentsContainer) => {
    const { openCreateApartment } = props
    const { allApartments } = useAppSelector((state) => state.apartments);
    const { userInfo } = useAppSelector(state => state.authentication)
    const { data, error, loading } = useGetAllApartments()

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
                    {allApartments.length === 0 && (
                        <>No Apartments</>
                    )}
                    {allApartments && allApartments.map((apartment, index) => (
                        <Apartment apartment={apartment} key={index} />
                    ))}
                </>

            )}
        </div>
    );
};

export default ApartmentContainer;
