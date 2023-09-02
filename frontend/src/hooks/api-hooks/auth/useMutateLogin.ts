import { UserResponse } from "../../../types/User";
import useMutateData from "../useMutateData";

const useMutateLogin = () => {
  return useMutateData<UserResponse>("/login");
};

export default useMutateLogin;
