
import { useEffect, useState } from 'react'
import { AuthHeader } from '../../../components/AuthHeader/AuthHeader'
import EmptyTableState from '../../../components/EmptyTableState/EmptyTableState'
import Search from '../../../components/Search/Search'
import { useAppSelector } from '../../../hooks/useAppSelector'
import '../styles/admin_users_styles.scss'
import { IApartment, } from '../../../interfaces/IAPIResponse'
import { filterApartmentsBySearch } from '../utils/filterApartments'
import ApartmentTable from '../components/Tables/ApartmentTable'

export const AdminApartments = () => {
  const tableHead = ['Apartment Name', 'Description', 'Location', 'Highest Price', 'Lowest Price', 'IsVerified', 'Actions']
  const { allApartments } = useAppSelector(state => state.apartments)

  const [adminApartments, setAdminApartments] = useState({
    allApartments: [] as IApartment[],
    filteredApartments: [] as IApartment[],
  })

  const [apartmentsFilterKeys, setApartmentsFilterKeys] = useState({
    search: "",
  });

  const filterApartments = async () => {
    const searchedResult = filterApartmentsBySearch(
      adminApartments.allApartments,
      apartmentsFilterKeys.search
    ).data;

    setAdminApartments({ ...adminApartments, filteredApartments: searchedResult })
  };

  useEffect(() => {
    filterApartments();
  }, [apartmentsFilterKeys]);

  const handleSearchForUsers = (value: string) => {
    setApartmentsFilterKeys({
      ...apartmentsFilterKeys,
      search: value,
    });
  };

  useEffect(() => {
    setAdminApartments({ allApartments: allApartments, filteredApartments: allApartments })
  }, [allApartments])
  return (
    <div >

      <div className="animate__animated animate__fadeIn">
        <AuthHeader message="Apartments" color="#5CA6CE" />
        <div className="users_header_components">
          <Search
            searchCustomClass="users_search"
            placeholder="Search By Apartment Name"
            onChange={handleSearchForUsers}
            label="Search For Apartment"
          />
        </div>

        <div className="appointment_list_container">
          {!adminApartments.filteredApartments.length ? (
            <EmptyTableState header='Apartment List' message="Looks like no Apartments yet" />
          ) : (
            <div className="users_table_container">
              <ApartmentTable tableData={adminApartments.filteredApartments} tableHead={tableHead} />
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

