import endpointRoutes from "../../../constants/EndpointRoutes";
import Product from "../../../types/Product";
import useQueryData from "../useQueryData";

const useQueryProducts = () => {
  return useQueryData<Product[]>(endpointRoutes.PRODUCTS.PRODUCTS);
};

export default useQueryProducts;
