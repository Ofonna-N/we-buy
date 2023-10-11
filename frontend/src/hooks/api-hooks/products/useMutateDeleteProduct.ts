import useMutateData from "../useMutateData";
import useShowSnackBar from "../../notification/useShowSnackBar";
import endpointRoutes from "../../../constants/EndpointRoutes";
import { useQueryClient } from "react-query";

const useMutateDeleteProduct = () => {
  const { showSnackBar } = useShowSnackBar();
  const queryClient = useQueryClient();

  const onProductDeleted = () => {
    queryClient.refetchQueries(endpointRoutes.PRODUCTS.PRODUCTS);
    showSnackBar("Product deleted successfully", "success");
  };
  const onProductDeletedError = (error: Error) => {
    showSnackBar(error.message, "error");
  };

  return useMutateData(
    endpointRoutes.PRODUCTS.PRODUCTS,
    onProductDeleted,
    onProductDeletedError,
    "delete"
  );
};

export default useMutateDeleteProduct;
