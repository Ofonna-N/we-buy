import endpointRoutes from "../../../constants/EndpointRoutes";
import Product from "../../../types/Product";
import useQueryData from ".././useQueryData";

const useQuerySingleProduct = (id: string) => {
  return useQueryData<Product>(endpointRoutes.PRODUCTS.PRODUCTS + id);
};

export default useQuerySingleProduct;
