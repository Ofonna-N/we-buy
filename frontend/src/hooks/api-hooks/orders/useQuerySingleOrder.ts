import endpointRoutes from "../../../constants/EndpointRoutes";
import { OrderResponse } from "../../../types/Order";
import useQueryData from "../useQueryData";

const useQuerySingleOrder = (id: string) => {
  return useQueryData<OrderResponse>(
    endpointRoutes.ORDERS.USER_ORDER_ROUTE + id
  );
};

export default useQuerySingleOrder;
