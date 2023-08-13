// Package Imports
import { AiOutlineClose } from "react-icons/ai";
// Drawer Styles
import "./DrawerStyles.scss";
import { IUser } from "../../../../interfaces/IAPIResponse";
import PopDrawer from "../../../../layouts/DrawerLayout/DrawerLayout";
import Input from "../../../../components/form/Input/Input";

interface IViewUserDrawer {
  onClose: () => void;
  drawerToggler: boolean;
  selectedUser: IUser;
}

const ViewUserDrawer = (props: IViewUserDrawer) => {
  console.log(props.selectedUser)
  const { onClose, drawerToggler, selectedUser } =
    props;


  const onDrawerClose = () => {
    onClose();
  };


  return (
    <PopDrawer onClose={onDrawerClose} drawerToggler={drawerToggler}>
      <div className="pay_for_booking_drawer">
        <div className="pay_for_booking_drawer_container">
          {/* This is the Share and Cancel Button Container */}
          <div className="pay_for_booking_drawer_head">
            <div className="pay_for_booking_drawer_head_container">
              <AiOutlineClose
                className="pay_for_booking_drawer_head_icon"
                onClick={onDrawerClose}
              />
            </div>
          </div>

          <div className="pay_for_booking_drawer_body">
            <div className="pay_for_booking_drawer_body_card_container card_bg_handler">

            </div>
            <form className="auth-form" >
              <div className="auth-field">
                <Input
                  id="First Name"
                  label="First Name"
                  error={null}
                  inputProps={{
                    placeholder: "First Name",
                    value: selectedUser.firstname,
                    required: true,
                    readOnly: true
                  }}
                />
              </div>

              <div className="auth-field">
                <Input
                  id="Last Name"
                  label="Last Name"
                  error={null}
                  inputProps={{
                    placeholder: "Last Name",
                    value: selectedUser.lastname,
                    required: true,
                    readOnly: true

                  }}
                />
              </div>

              <div className="auth-field">
                <Input
                  id="email"
                  label="Email"
                  error={null}
                  inputProps={{
                    placeholder: "Email",
                    value: selectedUser.email,
                    required: true,
                    readOnly: true
                  }}
                />
              </div>

              <div className="auth-field">
                <Input
                  id="status"
                  label="Status"
                  error={null}
                  inputProps={{
                    placeholder: "Status",
                    value: selectedUser.status,
                    required: true,
                    readOnly: true
                  }}
                />
              </div>








            </form>
          </div>
        </div>
      </div>
    </PopDrawer>
  );
};

export default ViewUserDrawer;
