import { userSliceActions } from "../../../slices/userSlice";
import { UserResponse } from "../../../types/User";
import { useAppDispatch } from "../../redux-hooks/appStoreHooks";
import useMutateData from "../useMutateData";

const useMutateLogin = <B>() => {
  const dispach = useAppDispatch();

  const onUserLogin = (data: UserResponse) => {
    dispach(userSliceActions.setUserCredentials(data?.user));
  };

  return useMutateData<UserResponse, B>("users/login", onUserLogin);
};

export default useMutateLogin;
