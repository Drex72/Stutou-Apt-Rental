import { AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Button from '../../../../components/Button/Button'
import { useAppSelector } from '../../../../hooks/useAppSelector'
import { useEffect, useState } from 'react'
import { getUserInformation, groupSingleChatBySenderReceiver } from '../../../../utils/groupChatsByReceiver'
import { IUser } from '../../../../interfaces/IAPIResponse'
import { useMessageActions } from '../../../../hooks/useReduxActions'

const SingleApartmentLeftSidebar = () => {
    const { apartments, users, messages } = useAppSelector(state => state)
    const { messageSingleUser } = useMessageActions()
    const { selectedApartment } = apartments
    const { users: allUsers } = users
    const { messages: allMessages } = messages
    const [userInfo, setUserInfo] = useState<IUser | null>(null)

    useEffect(() => {
        const currentUser = getUserInformation(allUsers, selectedApartment?.owner!)
        if (currentUser) {
            setUserInfo(currentUser)
        }
    }, [])

    const handleMessageOwner = () => {

        const messageInfo = groupSingleChatBySenderReceiver(allMessages, userInfo!)

        messageSingleUser({ chat: messageInfo })
    }

    return (
        <div className='single_apartment_left_sidebar_container animate__animated animate__fadeIn'>
            <h2 className="single_apartment_left_sidebar_container_header">{userInfo?.firstname} {userInfo?.lastname}</h2>
            <h2 className="single_apartment_left_sidebar_container_sub_header">{userInfo?.email}</h2>

            <Link className='single_apartment_left_sidebar_container_link' to={'/main/owner/propoerties'}>View Owner Properties <AiOutlineArrowRight /> </Link>

            <Button label='Message Owner' variant='contained' onClick={handleMessageOwner} />
        </div>
    )
}

export default SingleApartmentLeftSidebar