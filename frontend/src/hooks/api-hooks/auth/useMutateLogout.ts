import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux-hooks/appStoreHooks";
import useMutateData from "../useMutateData";
import { userSliceActions } from "../../../slices/userSlice";
import RoutesPaths from "../../../constants/RoutePaths";

const useMutateLogout = () => {
  const dispach = useAppDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispach(userSliceActions.logoutUser());
    navigate(RoutesPaths.SIGN_IN_ROUTE);
  };

  return useMutateData("users/logout", onLogout);
};

export default useMutateLogout;
