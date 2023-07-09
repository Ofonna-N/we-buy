import Product from "../../types/Product";
import useData from "./useData";

const useProducts = () => {
  return useData<Product[]>("/products");
};

export default useProducts;
