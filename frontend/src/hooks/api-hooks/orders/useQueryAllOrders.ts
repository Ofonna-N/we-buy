import useQueryData from "../useQueryData";
import endpointRoutes from "../../../constants/EndpointRoutes";
import { OrderResponse } from "../../../types/Order";

const useQueryAllOrders = () => {
  return useQueryData<OrderResponse[]>(endpointRoutes.ORDERS.ORDERS);
};

export default useQueryAllOrders;
