import { useNavigate } from "react-router-dom";
import endpointRoutes from "../../../constants/EndpointRoutes";
import useMutateData from "../useMutateData";
import RoutesPaths from "../../../constants/RoutePaths";
import { OrderResponse } from "../../../types/Order";

const useMutatePlaceOrder = () => {
  const navigate = useNavigate();

  const onOrderPlaced = (data: OrderResponse) => {
    navigate(RoutesPaths.ORDERS_ROUTE + "/" + data._id, {
      replace: true,
    });
    console.log("order placed: ", data);
  };

  return useMutateData(endpointRoutes.ORDERS.ORDERS, onOrderPlaced);
};

export default useMutatePlaceOrder;
