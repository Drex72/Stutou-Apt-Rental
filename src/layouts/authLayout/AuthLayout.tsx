import PopModal from "../ModalLayout/ModalLayout";
import "./AuthWrapperStyle.scss";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <PopModal onClose={() => console.log('hey')} fullOverlay >
      <div className="auth_layout_container">
        <Outlet />
      </div>
    </PopModal>
  );
};

export default AuthLayout;
