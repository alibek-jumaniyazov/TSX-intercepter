import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useGetPrivate } from "../../hooks/use-query";
import { authCheckUrl } from "../../utils/urls";
import { TUserResponse } from "../../pages/login";

export function RequareAuth() {
    const location = useLocation();
    const { data, isLoading, status } =
        useGetPrivate<TUserResponse>( authCheckUrl);


    if (isLoading) return <h1>Loading...</h1>;
    if (data && status === 200) return <Outlet />;
    return <Navigate to="/" state={{ from: location }} replace />;
}
