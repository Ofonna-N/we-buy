import Product from "../../types/Product";
import useQueryData from "./useQueryData";

const useQuerySingleProduct = (id: string) => {
  return useQueryData<Product>("products/" + id);
};

export default useQuerySingleProduct;
