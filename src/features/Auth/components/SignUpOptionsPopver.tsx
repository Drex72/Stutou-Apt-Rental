import React from 'react'
import Popover, { PopoverOrigin, PopoverVirtualElement } from "@mui/material/Popover";
import { useNavigate } from 'react-router-dom';
import { AllRouteConstants } from '../../../router/RouteConstants';
import "../styles/LoginStyles.scss";


interface ISignUpOptionsPopover {
    id: string
    anchorEl: any
    open: boolean
    handleClose: () => any
    anchorOrigin?: PopoverOrigin | undefined
    transformOrigin?: PopoverOrigin | undefined

}
const SignUpOptionsPopver = (props: ISignUpOptionsPopover) => {
    const { open, id, anchorEl, handleClose, anchorOrigin, transformOrigin } = props
    const navigate = useNavigate()
    return (
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}

            anchorOrigin={anchorOrigin ?? {
                vertical: 'top',
                horizontal: 'left',
            }}
            transformOrigin={transformOrigin ?? {
                vertical: 'bottom',
                horizontal: 'left',
            }}
            className="auth-signup_popover"
        >
            <div className="auth-signup_popover_container">
                <button onClick={() => navigate(AllRouteConstants.auth.signup.student)}>
                    Sign up as Student
                </button>
                <button onClick={() => navigate(AllRouteConstants.auth.signup.houseOwner)}>
                    Sign up as House Owner
                </button>
            </div>
        </Popover>
    )
}

export default SignUpOptionsPopver