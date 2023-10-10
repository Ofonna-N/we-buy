import useMutateData from "../useMutateData";
import endpointRoutes from "../../../constants/EndpointRoutes";
import useShowSnackBar from "../../notification/useShowSnackBar";
import { useQueryClient } from "react-query";

/**
 * A custom hook that returns a function to edit a product by making a PUT request to the server.
 * @param id - The ID of the product to edit.
 * @returns A function that can be used to edit a product.
 */
const useMutateEditProduct = (id: string) => {
  const { showSnackBar } = useShowSnackBar();
  const queryClient = useQueryClient();

  /**
   * A callback function that is called when a product is successfully edited.
   * It refetches the products query and shows a success snackbar.
   */
  const onProductEdited = () => {
    queryClient.refetchQueries(endpointRoutes.PRODUCTS.PRODUCTS);
    showSnackBar("Product edited successfully", "success");
  };

  /**
   * A callback function that is called when an error occurs while editing a product.
   * It shows an error snackbar with the error message.
   * @param error - The error that occurred while editing the product.
   */
  const onProductEditedError = (error: Error) => {
    showSnackBar(error.message, "error");
  };

  /**
   * A function that can be used to edit a product by making a PUT request to the server.
   * @returns An object containing the mutate function and its status.
   */
  return useMutateData(
    endpointRoutes.PRODUCTS.PRODUCTS + "/" + id,
    onProductEdited,
    onProductEditedError,
    "put"
  );
};

export default useMutateEditProduct;
