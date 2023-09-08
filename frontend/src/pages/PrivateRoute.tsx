import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks/redux-hooks/appStoreHooks";
import RoutesPaths from "../constants/RoutePaths";

const PrivateRoute = () => {
  const userInfo = useAppSelector((state) => state.userSlice.userInfo);

  console.log(userInfo);
  return userInfo ? (
    <Outlet />
  ) : (
    <Navigate to={RoutesPaths.SIGN_IN_ROUTE} replace relative="path" />
  );
};

export default PrivateRoute;
