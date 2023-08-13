import DashboardCard from "../components/DashboardCard/DashboardCard"
import { FiUsers } from 'react-icons/fi'
import '../styles/admin_addresses_styles.scss'

export const AdminAddresses = () => {
  return (
    <div>
      <div className="dashboard_main_container_card_container">
        <DashboardCard
          value={11}
          label="Total Amount of Users"
          icon={<FiUsers className="image_icon" />}
        />

      </div>
    </div>
  )
}

