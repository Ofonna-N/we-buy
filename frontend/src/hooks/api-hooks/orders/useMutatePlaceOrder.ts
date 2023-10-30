import { useNavigate } from "react-router-dom";
import endpointRoutes from "../../../constants/EndpointRoutes";
import useMutateData from "../useMutateData";
import RoutesPaths from "../../../constants/RoutePaths";
import { OrderResponse } from "../../../types/Order";
import { useAppDispatch } from "../../redux-hooks/appStoreHooks";
import { cartActions } from "../../../slices/cartSlice";

const useMutatePlaceOrder = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onOrderPlaced = (data: OrderResponse) => {
    navigate(RoutesPaths.ORDERS_ROUTE + "/" + data._id, {
      replace: true,
    });
    dispatch(cartActions.clearCart());
    // console.log("order placed: ", data);
  };

  return useMutateData(endpointRoutes.ORDERS.ORDERS, onOrderPlaced);
};

export default useMutatePlaceOrder;
