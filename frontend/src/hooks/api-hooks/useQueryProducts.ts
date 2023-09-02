import Product from "../../types/Product";
import useQueryData from "./useQueryData";

const useQueryProducts = () => {
  return useQueryData<Product[]>("/products");
};

export default useQueryProducts;
