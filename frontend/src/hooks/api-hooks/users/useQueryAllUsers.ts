import useQueryData from "../useQueryData";
import endpointRoutes from "../../../constants/EndpointRoutes";
import { UserResponse } from "../../../types/User";

const useQueryAllUsers = () => {
  return useQueryData<UserResponse["user"][]>(endpointRoutes.USERS.USERS);
};

export default useQueryAllUsers;
