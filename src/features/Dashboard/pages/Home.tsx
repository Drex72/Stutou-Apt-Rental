import { useAppSelector } from "../../../hooks/useAppSelector";
import DashboardCard from "../components/DashboardCard/DashboardCard";
import { FiUsers } from 'react-icons/fi'
import { BsHouses } from 'react-icons/bs'

import '../styles/admin_home_styles.scss'
import UserTable from "../components/Tables/UserTable";
import { usersTableHead } from "./AdminUsers";
import { AuthHeader } from "../../../components/AuthHeader/AuthHeader";

export const Home = () => {
  function setGreetings() {
    let date = new Date();
    let hours = date.getHours();
    let result = null;
    if (hours < 12) {
      result = "Morning";
    } else if (hours < 18) {
      result = "Afternoon";
    } else {
      result = "Evening";
    }
    return result;
  }

  const { userInfo } = useAppSelector((state => state.authentication))
  const { users } = useAppSelector(state => state.users)
  return (
    <div className="dashboard_main_container">
      <h1 className="dashboard_main_container_header">
        Good {setGreetings()},{" "}
        <span>{userInfo.firstname ?? "Oluwapelumi"} 👋🏿</span>
      </h1>

      <div className="dashboard_main_container_card_container">
        <DashboardCard
          value={11}
          label="Total Amount of Users"
          icon={<FiUsers className="image_icon" />}
        />
        <DashboardCard
          value={11}
          label="Total Amount of Apartments"
          icon={<BsHouses className="image_icon" />}
        />
        <DashboardCard
          value={11}
          label="Total Amount of Post Codes"
          icon={<BsHouses className="image_icon" />}
        />

      </div>

      <AuthHeader message="Users Table" color="#5CA6CE" />

      <div className="users_table_container">
        <UserTable tableData={users} tableHead={usersTableHead} />
      </div>

    </div>
  )
}

