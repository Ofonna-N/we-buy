import RoutesPaths from "../../../constants/RoutePaths";
import { OrderResponse } from "../../../types/Order";
import useQueryData from "../useQueryData";

const useQuerySingleOrder = (id: string) => {
  return useQueryData<OrderResponse>(RoutesPaths.ORDERS_ROUTE + "/" + id);
};

export default useQuerySingleOrder;
