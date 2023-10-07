import endpointRoutes from "../../../constants/EndpointRoutes";
// import { OrderResponse } from "../../../types/Order";
import useShowSnackBar from "../../notification/useShowSnackBar";
import useMutateData from "../useMutateData";

const useMutatePayOrder = (id: string) => {
  const { showSnackBar } = useShowSnackBar();

  const onOrderPaid = () => {
    showSnackBar("Order Paid (Test Button)", "success");

    // console.log("ORDER PAID: ", order);
  };

  return useMutateData(
    `${endpointRoutes.ORDERS.ORDERS}${id}/pay`,
    onOrderPaid,
    undefined,
    "patch"
  );
};

export default useMutatePayOrder;
