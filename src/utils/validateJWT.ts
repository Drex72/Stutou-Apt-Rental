export const isTokenExpired = (token: string) => {
  if (!token) {
    return true
  }
  return Date.now() >= JSON.parse(atob(token.split('.')[1])).exp * 1000
}

