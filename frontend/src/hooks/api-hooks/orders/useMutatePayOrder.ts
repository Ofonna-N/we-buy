import endpointRoutes from "../../../constants/EndpointRoutes";
import { appSnackBarActions } from "../../../slices/appSnackBarSlice";
import { OrderResponse } from "../../../types/Order";
import { useAppDispatch } from "../../redux-hooks/appStoreHooks";
import useMutateData from "../useMutateData";

const useMutatePayOrder = (id: string) => {
  const dispatch = useAppDispatch();
  const onOrderPaid = (order: OrderResponse) => {
    dispatch(
      appSnackBarActions.showAppSnackBar({
        message: "Order Paid (Test Button)",
        open: true,
        useIcon: {
          icon: "success",
        },
      })
    );
    console.log("ORDER PAID: ", order);
  };

  return useMutateData(
    `${endpointRoutes.ORDERS.ORDERS}${id}/pay`,
    onOrderPaid,
    "patch"
  );
};

export default useMutatePayOrder;
