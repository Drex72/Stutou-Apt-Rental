import React, { ReactElement, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AllRouteConstants } from "../router/RouteConstants";
import PageLoader from "../components/PageLoader/PageLoader";
import { isTokenExpired } from "../utils/validateJWT";
import { useAppSelector } from "../hooks/useAppSelector";
import { IUserType } from "../interfaces/IAuthInterface";

export interface RequireAuthProps {
  children: ReactElement;
  type: IUserType
}

export const RequireAuth: React.FC<RequireAuthProps> = ({ children, type }) => {
  const userToken = localStorage.getItem('accessToken') ?? null
  const { userType } = useAppSelector(state => state.authentication)
  const navigate = useNavigate();
  const [pageLoading, setPageLoading] = useState(false)

  useEffect(() => {
    setPageLoading(true)
    if (!userToken || isTokenExpired(userToken)
    ) {
      localStorage.removeItem('accessToken')
      return navigate(AllRouteConstants.auth.index);
    }

    if (userType !== type && userType == 'user') {
      return navigate(AllRouteConstants.main.index);
    }

    if (userType !== type && userType == 'admin') {
      return navigate(AllRouteConstants.admin.index);
    }
    setPageLoading(false)
  }, []);

  if (pageLoading) {
    return <PageLoader />
  }

  return children
}
