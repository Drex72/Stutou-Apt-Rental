import React, { ReactElement, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AllRouteConstants } from "../router/RouteConstants";
import PageLoader from "../components/PageLoader/PageLoader";
import { isTokenExpired } from "../utils/validateJWT";

export interface RequireAuthProps {
  children: ReactElement;
}

export const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  const userToken = localStorage.getItem('accessToken') ?? null
  const navigate = useNavigate();
  const [pageLoading, setPageLoading] = useState(false)

  useEffect(() => {
    setPageLoading(true)
    if (!userToken || isTokenExpired(userToken)) {
      navigate(AllRouteConstants.auth.index);
    } 
    setPageLoading(false)
  }, []);

  // if (pageLoading) {
  //   return <PageLoader />
  // }

  return children
}
