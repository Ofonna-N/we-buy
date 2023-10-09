import { useAppSelector } from "../hooks/redux-hooks/appStoreHooks";
import { Navigate, Outlet } from "react-router-dom";

const AdminRoute = () => {
  const isAdmin = useAppSelector((state) => state.userSlice.userInfo?.isAdmin);

  return isAdmin ? <Outlet /> : <Navigate to="/" replace />;
};

export default AdminRoute;
