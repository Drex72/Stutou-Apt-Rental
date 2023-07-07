import { useState } from 'react'

const usePasswordType = () => {
    const [passwordType, setPasswordType] = useState("password");

    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text");
            return;
        }
        setPasswordType("password");
    };

    return {
        passwordType, togglePassword
    }
}

export default usePasswordType