import endpointRoutes from "../../../constants/EndpointRoutes";
import useShowSnackBar from "../../notification/useShowSnackBar";
import useMutateData from "../useMutateData";

const useMutateDeliverOrder = () => {
  const { showSnackBar } = useShowSnackBar();

  const onOrderDelivered = () => {
    showSnackBar("Order Delivered", "success");

    // console.log("ORDER DELIVERED: ", order);
  };

  const onOrderDeliveredError = () => {
    showSnackBar("Order Deliver Failed", "error");

    // console.log("ORDER DELIVERED ERROR: ", error);
  };

  return useMutateData(
    endpointRoutes.ORDERS.ORDERS + "/deliver",
    onOrderDelivered,
    onOrderDeliveredError,
    "patch"
  );
};

export default useMutateDeliverOrder;
