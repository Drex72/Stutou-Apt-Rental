import React, { ReactElement, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks/useAppSelector";
import { AllRouteConstants } from "../router/RouteConstants";
import useGetUserInfo from "../features/Main/hooks/useGetUserInfo";
import PageLoader from "../components/PageLoader/PageLoader";
import { isTokenExpired } from "../utils/validateJWT";

export interface RequireAuthProps {
  children: ReactElement;
}

export const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  const { userToken } = useAppSelector((state) => state.authentication);
  const { loading } = useGetUserInfo()
  const navigate = useNavigate();
  const [pageLoading, setPageLoading] = useState(true)

  const handlePage = () => {
    if (userToken && !isTokenExpired(userToken)) {
      navigate(AllRouteConstants.main.index);
    }else{
      navigate(AllRouteConstants.auth.index)
    }
    setPageLoading(loading)
  }

  useEffect(() => {
    handlePage()
    setPageLoading(false)
  }, [userToken]);

  if (pageLoading) {
    return <PageLoader />
  }

  return children
}
