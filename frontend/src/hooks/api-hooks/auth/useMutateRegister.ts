import { useNavigate } from "react-router-dom";
import { UserResponse } from "../../../types/User";
import useMutateData from "../useMutateData";
import { useAppDispatch } from "../../redux-hooks/appStoreHooks";
import { userSliceActions } from "../../../slices/userSlice";
import RoutesPaths from "../../../constants/RoutePaths";
import endpointRoutes from "../../../constants/EndpointRoutes";

const useMutateRegister = () => {
  const dispach = useAppDispatch();
  const navigate = useNavigate();

  const onRegisterUser = (data: UserResponse) => {
    dispach(userSliceActions.setUserCredentials(data?.user));
    navigate(RoutesPaths.HOME_ROUTE);
  };

  return useMutateData(endpointRoutes.AUTH.REGISTER_USER, onRegisterUser);
};

export default useMutateRegister;
