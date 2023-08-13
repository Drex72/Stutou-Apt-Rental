import { SlOptionsVertical } from "react-icons/sl";
import './AdminTablesStyles.scss'

import {
    TableLayout,
    TableBodyContainer,
    TableBodyRow,
    TableBodyRowChild,
    TableHead,
    TableHeadContainer,
} from "../../../../components/TableLayout/TableLayout";
import Popover from "@mui/material/Popover";
import { IUser } from "../../../../interfaces/IAPIResponse";
import usePopOver from "../../../../hooks/usePopOver";
import useUsersTable from "../../hooks/useUsersTable";
import Button from "../../../../components/Button/Button";
import { useState } from "react";
import ViewUserDrawer from "../Drawers/ViewUserDrawer";


interface IUsersTable {
    tableHead: string[];
    tableData: IUser[];
}

const UserTable = ({
    tableHead,
    tableData,
}: IUsersTable) => {
    const { anchorEl, handleClick, handleClose, id, open } = usePopOver()
    const { handleClickUser, userToBeEdited, handleDeleteUser, handleUnClickUser, drawerOpen, setDrawerOpen } = useUsersTable({ closePopup: handleClose })
    const { deleteUser, loading: deleteUserLoading } = handleDeleteUser()

    const [selectedUser, setSelectedUser] = useState<IUser | null>(null)



    const handleDrawerClose = () => {
        setDrawerOpen({ status: false, user: null })
    }
    return (
        <>
            {drawerOpen.status && (
                <ViewUserDrawer
                    onClose={handleDrawerClose}
                    drawerToggler={drawerOpen.status}
                    selectedUser={drawerOpen.user!}
                />
            )}
            <TableLayout >
                <TableHeadContainer>
                    <>
                        {tableHead.map((head) => (
                            <TableHead label={head} key={head} />
                        ))}
                    </>
                </TableHeadContainer>
                <TableBodyContainer>
                    <>
                        {tableData.map((item, index) => (
                            <TableBodyRow key={index}>
                                <TableBodyRowChild>{item.firstname}</TableBodyRowChild>
                                <TableBodyRowChild>{item.lastname}</TableBodyRowChild>
                                <TableBodyRowChild nonCapitalize>{item.email}</TableBodyRowChild>
                                <TableBodyRowChild>
                                    <div >
                                        {item.status}
                                    </div>
                                </TableBodyRowChild>
                                <TableBodyRowChild>
                                    <SlOptionsVertical
                                        aria-describedby={id}
                                        className="userActions"
                                        onClick={(e: any) => { setSelectedUser(item), handleClick(e) }}
                                    />
                                    <Popover
                                        id={id}
                                        open={open}
                                        anchorEl={anchorEl}
                                        onClose={handleClose}
                                        anchorOrigin={{
                                            vertical: "bottom",
                                            horizontal: "left",
                                        }}
                                    >
                                        {userToBeEdited.status ? (
                                            <div className="update_user_state">
                                                <h4>
                                                    Are you sure you want to {userToBeEdited.action} this user?
                                                </h4>

                                                <div className="user_action_button_container">
                                                    <button
                                                        onClick={handleUnClickUser}
                                                        className="rejected_status_user status_button"
                                                    >
                                                        No
                                                    </button>
                                                    <Button
                                                        variant="contained"
                                                        label="Yes"
                                                        buttonClassName="table_delete_button"
                                                        onClick={() => deleteUser(selectedUser!._id)}
                                                        loading={deleteUserLoading}
                                                    />
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="user_table_actions_container">
                                                <button onClick={() => handleClickUser(selectedUser!, 'view')}>
                                                    View User
                                                </button>
                                                <button onClick={() => handleClickUser(selectedUser!, 'delete')}>
                                                    Delete User
                                                </button>

                                            </div>
                                        )}
                                    </Popover>
                                </TableBodyRowChild>
                            </TableBodyRow>
                        ))}
                    </>
                </TableBodyContainer>
            </TableLayout>
        </>
    );
};

export default UserTable;

