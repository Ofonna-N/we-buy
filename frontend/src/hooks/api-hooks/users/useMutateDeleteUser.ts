import { useQueryClient } from "react-query";
import endpointRoutes from "../../../constants/EndpointRoutes";
import useShowSnackBar from "../../notification/useShowSnackBar";
import useMutateData from "../useMutateData";

const useMutateDeleteUser = () => {
  const { showSnackBar } = useShowSnackBar();
  const queryClient = useQueryClient();

  const onUserDeleted = () => {
    queryClient.refetchQueries(endpointRoutes.USERS.USERS);
    queryClient.refetchQueries(endpointRoutes.ORDERS.ORDERS);
    showSnackBar("User deleted successfully", "success");
  };
  const onUserDeletedError = (error: Error) => {
    showSnackBar(error.message, "error");
  };

  return useMutateData(
    endpointRoutes.USERS.USERS,
    onUserDeleted,
    onUserDeletedError,
    "delete"
  );
};

export default useMutateDeleteUser;
