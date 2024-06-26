import "./DashboardLayoutStyles.scss";
import DashboardMobile from "./DashboardMobile/DashboardMobile";
import DashboardDesktop from "./DashboardDesktop/DashboardDesktop";
import PageLoader from "../../components/PageLoader/PageLoader";
import useGetUsers from "../../features/Main/hooks/useGetUsers";
import { RequireAuth } from "../../HoC/RequireAuth";
import { useEffect } from "react";
import useGetAllApartments from "../../features/Main/hooks/useGetAllApartments";

const DashboardLayout = () => {
  const { loading, getAllUsers,data:allUsers } = useGetUsers()
  const { loading: apartmentsLoading, getAllApartmentsHandler } = useGetAllApartments(false)

  const getData = async () => {
    getAllUsers()
    getAllApartmentsHandler()
  }

  useEffect(() => {
    getAllApartmentsHandler(allUsers?.data)
  }, [allUsers])
  useEffect(() => {
    getData()
  }, [])
  return (
    <RequireAuth type="admin">
      <>
        {loading || apartmentsLoading ? (
          <PageLoader />
        ) : (
          <div className="dashboard_layout_container animate__animated animate__fadeIn">
            {/* Desktop View */}
            <DashboardDesktop />
            {/* Mobile View */}
            <DashboardMobile />
          </div>
        )}
      </>
    </RequireAuth>
  );
};

export default DashboardLayout;
