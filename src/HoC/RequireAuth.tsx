import React, { ReactElement, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks/useAppSelector";
import { AllRouteConstants } from "../router/routes";

export interface RequireAuthProps {
  children: ReactElement;
}

export const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  const { value } = useAppSelector((state) => state.authentication);

  const navigate = useNavigate();

  useEffect(() => {
    console.log('hey')
    // if (!value.email) {
    //   navigate(AllRouteConstants.auth.login);
    // }
  }, [value]);

  return children;
};
