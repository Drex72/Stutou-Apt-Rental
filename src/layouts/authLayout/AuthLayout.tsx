import { useEffect } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import PopModal from "../ModalLayout/ModalLayout";
import "./AuthWrapperStyle.scss";
import { Outlet } from "react-router";
import { AllRouteConstants } from "../../router/RouteConstants";
import { useNavigate } from "react-router-dom";

const AuthLayout = () => {
  const { userToken } = useAppSelector((state) => state.authentication);
  const navigate = useNavigate();

  useEffect(() => {
    if (userToken) {
      navigate(AllRouteConstants.main.index)
    }
  }, [])
  return (
    <PopModal onClose={() => console.log('hey')} fullOverlay >
      <div className="auth_layout_container">
        <Outlet />
      </div>
    </PopModal>
  );
};

export default AuthLayout;
