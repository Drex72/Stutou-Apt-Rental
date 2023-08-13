import { IUser, Status } from '../../../interfaces/IAPIResponse'

export const filterUsersBySearch = (users: IUser[], searchKeyword: string) => {
  if (searchKeyword) {
    const result = users.filter(
      (user) =>
        user.firstname.toLowerCase().includes(searchKeyword) ||
        user.lastname.toLowerCase().includes(searchKeyword)
    )
    return { message: 'Successfully Searched', data: result }
  } else {
    return { message: 'No Value Searched', data: users }
  }
}
export const filterUsersByStatus = (users: IUser[], status: Status | 'all') => {
  if (status) {
    if (status === 'all') {
      return { message: 'Successfully Searched', data: users }
    } else {
      const result = users.filter(
        (user) =>
          user?.status?.toLocaleLowerCase() === status?.toLocaleLowerCase()
      )
      return { message: 'Successfully Searched', data: result }
    }
  } else {
    return { message: 'No Value Filtered', data: users }
  }
}
