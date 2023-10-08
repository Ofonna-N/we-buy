import endpointRoutes from "../../../constants/EndpointRoutes";
import { OrderResponse } from "../../../types/Order";
import useQueryData from "../useQueryData";

const useQueryProfileOrders = () => {
  return useQueryData<OrderResponse[]>(endpointRoutes.ORDERS.USER_ORDER_ROUTE);
};

export default useQueryProfileOrders;
