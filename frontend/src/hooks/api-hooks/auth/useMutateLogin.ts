import { UserResponse } from "../../../types/User";
import useMutateData from "../useMutateData";

const useMutateLogin = <B>() => {
  return useMutateData<UserResponse, B>("users/login");
};

export default useMutateLogin;
