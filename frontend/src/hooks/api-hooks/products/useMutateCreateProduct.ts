import useMutateData from "../useMutateData";
import useShowSnackBar from "../../notification/useShowSnackBar";
import endpointRoutes from "../../../constants/EndpointRoutes";

const useMutateCreateProduct = () => {
  const { showSnackBar } = useShowSnackBar();

  const onProductCreated = () => {
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
