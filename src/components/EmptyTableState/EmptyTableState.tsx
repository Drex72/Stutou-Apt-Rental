import "./EmptyTableStateStyles.scss";
import NoAppointment from "../../assets/images/No-Bookings.png";
import Header from "../Header/Header";

const EmptyTableState = ({
  header,
  message,
}: {
  header: string;
  message: string
}) => {
  return (
    <div className="no_appointment_container">
      <div className="no_appointment_image_container">
        <img
          src={NoAppointment}
          alt="No Appointments"
          className="no_appointment_image"
        />
      </div>
      <Header message={header} size="md" />
      {message && <span>{message}</span>}
    </div>
  );
};

export default EmptyTableState;
