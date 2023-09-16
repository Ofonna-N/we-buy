import { useNavigate } from "react-router-dom";
import { userSliceActions } from "../../../slices/userSlice";
import { UserResponse } from "../../../types/User";
import { useAppDispatch } from "../../redux-hooks/appStoreHooks";
import useMutateData from "../useMutateData";
import RoutesPaths from "../../../constants/RoutePaths";
import endpointRoutes from "../../../constants/EndpointRoutes";

const useMutateLogin = <B>() => {
  const dispach = useAppDispatch();
  const navigate = useNavigate();

  const onUserLogin = (data: UserResponse) => {
    dispach(userSliceActions.setUserCredentials(data?.user));
    navigate(RoutesPaths.HOME_ROUTE);
  };

  return useMutateData<UserResponse, B>(
    endpointRoutes.AUTH.LOGIN_USER,
    onUserLogin
  );
};

export default useMutateLogin;
