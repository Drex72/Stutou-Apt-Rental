import ApartmentSkeletonLoader from "../../../../components/SkeletonLoaders/ApartmentSkeletonLoader";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import useGetAllApartments from "../../hooks/useGetAllApartments";
import CreateApartment from "../CreateApartment/CreateApartment";
import ApartmentMini from "./ApartmentMini";

interface IApartmentsContainer {
    openCreateApartment: () => void
}

const ApartmentContainer = (props: IApartmentsContainer) => {
    const { openCreateApartment } = props
    const { filteredApartments } = useAppSelector((state) => state.apartments);
    const { userInfo } = useAppSelector(state => state.authentication)
    const { loading } = useGetAllApartments(false)

    return (
        <div className="posts" style={{ display: 'flex', flexDirection: 'column', gap: '50px', width:'100%' }}>
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
                    {filteredApartments.length === 0 && (
                        <>No Apartments</>
                    )}
                    {filteredApartments && filteredApartments.map((apartment, index) => (
                        <ApartmentMini apartment={apartment} key={index} />
                    ))}
                </>

            )}
        </div>
    );
};

export default ApartmentContainer;
