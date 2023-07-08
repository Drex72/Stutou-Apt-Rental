import Logo from "../../assets/icons/logo.svg";
import './LogoStyles.scss'

const LogoComponent = ({ dark }: { dark?: boolean }) => {
    return (
        <div className="logo">
            <div className="logo_wrapper">
                <img src={Logo} alt="logo" />
            </div>
            <span className={`text ${dark ? 'text-dark' : ''}`}>
                StuApt
            </span>
        </div>
    )
}

export default LogoComponent