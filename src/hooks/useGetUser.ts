import { useAppSelector } from './useAppSelector'

const useGetUser = (userId: string) => {
  const { users } = useAppSelector((state) => state.users)

  const selectedUser = users.find((user) => user._id === userId)
  console.log(userId, users)
  return { selectedUser }
}

export default useGetUser
