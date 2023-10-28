import useMutateData from "../useMutateData";
import useShowSnackBar from "../../notification/useShowSnackBar";
import endpointRoutes from "../../../constants/EndpointRoutes";
import { useQueryClient } from "react-query";

const useMutateCreateProduct = () => {
  const { showSnackBar } = useShowSnackBar();
  const queryClient = useQueryClient();
  const onProductCreated = () => {
    queryClient.refetchQueries("products", { exact: true });
    showSnackBar("Product created successfully", "success");
  };
  const onProductCreatedError = (error: Error) => {
    showSnackBar(error.message, "error");
  };

  return useMutateData(
    endpointRoutes.PRODUCTS.PRODUCTS,
    onProductCreated,
    onProductCreatedError
  );
};

export default useMutateCreateProduct;
