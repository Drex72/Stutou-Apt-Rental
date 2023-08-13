import { Status } from '../../../interfaces/IAPIResponse'

export const statusClassName = (status: Status) => {
  switch (status) {
    case 'owner':
      return 'owner_status_button status_button'
    case 'student':
      return 'student_status_button status_button'
    default:
      return ''
  }
}
