import endpointRoutes from "../../../constants/EndpointRoutes";
import { OrderResponse } from "../../../types/Order";
import useQueryData from "../useQueryData";

const useQuerySingleOrderById = (id: string) => {
  return useQueryData<OrderResponse>(endpointRoutes.ORDERS.ORDERS + id);
};

export default useQuerySingleOrderById;
