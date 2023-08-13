import { useEffect, useState } from 'react'
import { AuthHeader } from '../../../components/AuthHeader/AuthHeader'
import EmptyTableState from '../../../components/EmptyTableState/EmptyTableState'
import Search from '../../../components/Search/Search'
import FormSelect from '../../../components/form/formSelect/FormSelect'
import { useAppSelector } from '../../../hooks/useAppSelector'
import UserTable from '../components/Tables/UserTable'
import { UserFilterOptions } from '../data/DummyUsers'
import '../styles/admin_users_styles.scss'
import { IUser, Status } from '../../../interfaces/IAPIResponse'
import { filterUsersBySearch, filterUsersByStatus } from '../utils/filterUsers'

export const usersTableHead = ['First Name', 'Last Name', 'Email', 'Status', 'Actions']
export const AdminUsers = () => {
    const { users } = useAppSelector(state => state.users)

    const [adminUsers, setAdminUsers] = useState({
        allUsers: [] as IUser[],
        filteredUsers: [] as IUser[],
    })

    const [usersFilterKeys, setUsersFilterKeys] = useState({
        search: "",
        sortByUserStatus: "" as Status,
    });

    const filterUsers = async () => {
        const searchedResult = filterUsersBySearch(
            adminUsers.allUsers,
            usersFilterKeys.search
        ).data;
        const usersStatusFilter = filterUsersByStatus(
            searchedResult,
            usersFilterKeys.sortByUserStatus
        ).data;

        setAdminUsers({ ...adminUsers, filteredUsers: usersStatusFilter });
    };

    useEffect(() => {
        filterUsers();
    }, [usersFilterKeys]);

    const handleFilterUsers = (value: Status) => {
        setUsersFilterKeys({ ...usersFilterKeys, sortByUserStatus: value });
    };

    const handleSearchForUsers = (value: string) => {
        setUsersFilterKeys({
            ...usersFilterKeys,
            search: value,
        });
    };

    useEffect(() => {
        setAdminUsers({ filteredUsers: users, allUsers: users })
    }, [users])
    return (
        <div >

            <div className="animate__animated animate__fadeIn">
                <AuthHeader message="Users" color="#5CA6CE" />
                <div className="users_header_components">
                    <Search
                        searchCustomClass="users_search"
                        placeholder="Search By Service Name"
                        onChange={handleSearchForUsers}
                        label="Search For User"
                    />
                    <FormSelect
                        name='userFilter'
                        id="userFilter"
                        label="Filter By:"
                        error={null}
                        options={UserFilterOptions}
                        dropdownProps={{
                            onChange: (val: { value: string; label: string }) => {
                                handleFilterUsers(val.value as Status);
                            },
                            className: 'users_filter'
                        }}
                    />
                </div>

                <div className="appointment_list_container">
                    {!adminUsers.filteredUsers.length ? (
                        <EmptyTableState header='User List' message="Looks like no Users yet" />
                    ) : (
                        <div className="users_table_container">
                            <UserTable tableData={adminUsers.filteredUsers} tableHead={usersTableHead} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

