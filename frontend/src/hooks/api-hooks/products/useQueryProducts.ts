import endpointRoutes from "../../../constants/EndpointRoutes";
import { ProductsResponse } from "../../../types/Product";
import useQueryData from "../useQueryData";

const useQueryProducts = (query?: string) => {
  return useQueryData<ProductsResponse>(
    endpointRoutes.PRODUCTS.PRODUCTS + "?" + query
  );
};

export default useQueryProducts;
