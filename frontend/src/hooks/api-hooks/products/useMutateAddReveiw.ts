import useMutateData from "../useMutateData";
import endpointRoutes from "../../../constants/EndpointRoutes";
import useShowSnackBar from "../../notification/useShowSnackBar";
import { useQueryClient } from "react-query";

const useMutateAddReveiw = (id: string) => {
  const { showSnackBar } = useShowSnackBar();
  const queryClient = useQueryClient();

  const onReviewSuccess = () => {
    queryClient.refetchQueries(endpointRoutes.PRODUCTS.PRODUCTS + id);
    showSnackBar("Review Added Successfully", "success");
  };

  const onReviewError = (err: Error) => {
    showSnackBar(err.message, "error");
  };

  return useMutateData(
    endpointRoutes.PRODUCTS.PRODUCTS +
      "/" +
      id +
      endpointRoutes.PRODUCTS.REVIEWS,
    onReviewSuccess,
    onReviewError
  );
};

export default useMutateAddReveiw;
