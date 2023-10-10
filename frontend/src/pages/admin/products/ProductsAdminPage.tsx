import { Typography } from "@mui/material";
import AppContainer from "../../../component/page/AppContainer";
// import { useNavigate } from "react-router-dom";
import useQueryProducts from "../../../hooks/api-hooks/products/useQueryProducts";
import AppProductsTable from "../../../component/common/AppProductsTable";

const ProductsAdminPage = () => {
  const { data: products, isLoading, error } = useQueryProducts();
  //   const navigate = useNavigate();
  return (
    <AppContainer>
      <Typography variant="h4" mb={"2rem"}>
        {" "}
        Products
      </Typography>
      <AppProductsTable
        products={products}
        productError={error}
        productIsLoading={isLoading}
        isAdmin={true}
        onRowClick={(product) => {
          console.log("Edit product: ", product._id);
          //   navigate(
          //     RoutesPaths.ADMIN_ROUTE +
          //       RoutesPaths.PRODUCTS_ROUTE +
          //       "/" +
          //       product._id
          //   );
        }}
      />
    </AppContainer>
  );
};

export default ProductsAdminPage;
