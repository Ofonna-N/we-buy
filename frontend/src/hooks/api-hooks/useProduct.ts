import Product from "../../types/Product";
import useData from "./useData";

const useProduct = (id: string) => {
  return useData<Product>("products/" + id);
};

export default useProduct;
