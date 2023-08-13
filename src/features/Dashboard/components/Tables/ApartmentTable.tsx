import { useState } from 'react';
import { IApartment } from '../../../../interfaces/IAPIResponse';
import usePopOver from '../../../../hooks/usePopOver';
import { SlOptionsVertical } from 'react-icons/sl';
import { TableLayout, TableHeadContainer, TableBodyContainer, TableBodyRow, TableBodyRowChild, TableHead } from '../../../../components/TableLayout/TableLayout';
import { Popover } from '@mui/material';
import { verificationClassName } from '../../utils/customTableActions';
import useApartmentsTable from '../../hooks/useApartmentsTable';
import Button from '../../../../components/Button/Button';
import { truncateText } from '../../../Main/components/Posts/ApartmentMini';


interface IApartmentsTable {
    tableHead: string[];
    tableData: IApartment[];
}
const ApartmentTable = (props: IApartmentsTable) => {
    const { tableData, tableHead } = props
    const { anchorEl, handleClick, handleClose, id, open } = usePopOver()
    const { apartmentToBeEdited, handleClickApartment, handleVerifyApartment, handleUnClickApartment } = useApartmentsTable({ closePopup: handleClose })
    const { verifyApartment, loading: verifyApartmentLoading } = handleVerifyApartment()


    const [selectedApartment, setSelectedApartment] = useState<IApartment | null>(null)

    return (
        <>

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
                                <TableBodyRowChild>{item.name}</TableBodyRowChild>
                                <TableBodyRowChild>{truncateText(item.description, 20)}</TableBodyRowChild>
                                <TableBodyRowChild nonCapitalize>{item.location}</TableBodyRowChild>
                                <TableBodyRowChild nonCapitalize>{item.highestPrice}</TableBodyRowChild>
                                <TableBodyRowChild nonCapitalize>{item.lowestPrice}</TableBodyRowChild>
                                <TableBodyRowChild>
                                    <div className={verificationClassName(item.isVerified!)}>
                                        {item.isVerified ? 'Verified' : 'Unverified'}
                                    </div>
                                </TableBodyRowChild>
                                <TableBodyRowChild>
                                    <SlOptionsVertical
                                        aria-describedby={id}
                                        className="userActions"
                                        onClick={(e: any) => { setSelectedApartment(item), handleClick(e) }}
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
                                        {apartmentToBeEdited.status ? (
                                            <div className="update_user_state">
                                                <h4>
                                                    Are you sure you want to {apartmentToBeEdited.action} this user?
                                                </h4>

                                                <div className="user_action_button_container">
                                                    <button
                                                        onClick={handleUnClickApartment}
                                                        className="rejected_status_user status_button"
                                                    >
                                                        No
                                                    </button>
                                                    <Button
                                                        variant="contained"
                                                        label="Yes"
                                                        buttonClassName=""
                                                        onClick={() => verifyApartment(selectedApartment!._id)}
                                                        loading={verifyApartmentLoading}
                                                    />
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="user_table_actions_container">
                                                {/* <button onClick={() => handleClickApartment(selectedApartment!, 'view')}>
                                                    View Apartment
                                                </button> */}
                                                <button onClick={() => handleClickApartment(selectedApartment!, 'verify')}>
                                                    Verify Apartment
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
}

export default ApartmentTable