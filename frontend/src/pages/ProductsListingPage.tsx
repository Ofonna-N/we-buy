import { CircularProgress, Container, Typography } from "@mui/material";
import ProductsListing from "../component/products/ProductsListing";
import useProducts from "../hooks/api-hooks/useProducts";

const ProductsListingPage = () => {
  const { data: products, isLoading, error } = useProducts();

  if (isLoading)
    return <CircularProgress sx={{ marginLeft: "2rem", marginTop: "3rem" }} />;
  // console.log("ERROR: ", error?.message);

  if (error) throw new Error(error.message);

  return (
    <Container
      fixed
      sx={{
        marginTop: "2rem",
      }}
    >
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
    </Container>
  );
};

export default ProductsListingPage;
