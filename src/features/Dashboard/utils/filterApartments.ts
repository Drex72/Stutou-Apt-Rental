import { IApartment } from '../../../interfaces/IAPIResponse'

export const filterApartmentsBySearch = (
  users: IApartment[],
  searchKeyword: string
) => {
  if (searchKeyword) {
    const result = users.filter((user) =>
      user.name.toLowerCase().includes(searchKeyword)
    )
    return { message: 'Successfully Searched', data: result }
  } else {
    return { message: 'No Value Searched', data: users }
  }
}
