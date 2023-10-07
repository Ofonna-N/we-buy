import endpointRoutes from "../../../constants/EndpointRoutes";
import { userSliceActions } from "../../../slices/userSlice";
import User from "../../../types/User";
import useShowSnackBar from "../../notification/useShowSnackBar";
import { useAppDispatch } from "../../redux-hooks/appStoreHooks";
import useMutateData from "../useMutateData";

const useMutateUpdateUser = () => {
  const { showSnackBar } = useShowSnackBar();
  const dispach = useAppDispatch();
  const onUserUpdated = (user: User) => {
    // console.log("USER UPDATED: ", user);
    dispach(userSliceActions.setUserCredentials(user));
  };

  const onUserUpdateError = (error: Error) => {
    showSnackBar(error.message, "error");
  };

  return useMutateData(
    endpointRoutes.USERS.USER_PROFILE,
    onUserUpdated,
    onUserUpdateError,
    "patch"
  );
};

export default useMutateUpdateUser;
