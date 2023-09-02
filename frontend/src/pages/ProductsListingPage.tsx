import { CircularProgress, Typography } from "@mui/material";
import ProductsListing from "../component/products/ProductsListing";
import useQueryProducts from "../hooks/api-hooks/products/useQueryProducts";
import AppContainer from "../component/page/AppContainer";

const ProductsListingPage = () => {
  const { data: products, isLoading, error } = useQueryProducts();

  if (isLoading)
    return <CircularProgress sx={{ marginLeft: "2rem", marginTop: "3rem" }} />;
  // console.log("ERROR: ", error?.message);

  if (error) throw new Error(error.message);

  return (
    <AppContainer>
      <Typography
        component={"h2"}
        fontSize={"1.8rem"}
        mb={"0.5rem"}
        sx={{
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        {" "}
        All Products
      </Typography>
      <ProductsListing products={products || []} />
    </AppContainer>
  );
};

export default ProductsListingPage;
