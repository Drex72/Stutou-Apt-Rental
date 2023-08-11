import { useNavigate } from 'react-router-dom'
import { useAuthActions, useMessageActions } from '../../../../hooks/useReduxActions'
import { AllRouteConstants } from '../../../../router/RouteConstants'
import './ProfileStyles.scss'

const Profile = () => {
    const { logout } = useAuthActions()
    const { clearMessageSingleUser } = useMessageActions()
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate(AllRouteConstants.auth.login)
        clearMessageSingleUser()
    }

    return (
        <div className='social_media_profile'>
            <div className="social_media_profile_container">
                <button className="social_media_profile_button" onClick={handleLogout}>
                    Logout
                </button>
                <button className="social_media_profile_button">
                    Close
                </button>
            </div>
        </div>
    )
}

export default Profile