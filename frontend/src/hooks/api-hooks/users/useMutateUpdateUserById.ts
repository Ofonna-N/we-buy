import { useQueryClient } from "react-query";
import endpointRoutes from "../../../constants/EndpointRoutes";
import useShowSnackBar from "../../notification/useShowSnackBar";
import useMutateData from "../useMutateData";

const useMutateUpdateUserById = (id: string) => {
  const { showSnackBar } = useShowSnackBar();
  const queryClient = useQueryClient();
  const onUserUpdated = () => {
    // console.log("USER UPDATED: ", user);
    queryClient.refetchQueries(endpointRoutes.USERS.USERS);
    showSnackBar("User updated successfully", "success");
  };

  const onUserUpdateError = (error: Error) => {
    showSnackBar(error.message, "error");
  };

  return useMutateData(
    endpointRoutes.USERS.USERS + id,
    onUserUpdated,
    onUserUpdateError,
    "put"
  );
};

export default useMutateUpdateUserById;
