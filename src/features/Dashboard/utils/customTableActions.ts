export const verificationClassName = (status: boolean) => {
  switch (status) {
    case true:
      return 'verified_status_button status_button'
    case false:
      return 'unverified_status_button status_button'
    default:
      return ''
  }
}
