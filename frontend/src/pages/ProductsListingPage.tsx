import { CircularProgress, Container, Typography } from "@mui/material";
import ProductsListing from "../component/products/ProductsListing";
import useProducts from "../hooks/api-hooks/useProducts";

const ProductsListingPage = () => {
  const { data: products, isLoading, error } = useProducts();

  if (isLoading)
    return <CircularProgress sx={{ marginLeft: "2rem", marginTop: "3rem" }} />;

  if (error.message) throw new Error(error.message);

  return (
    <Container
      fixed
      sx={{
        marginTop: "2rem",
      }}
    >
      <Typography
        variant="h4"
        component={"h2"}
        mb={"2rem"}
        sx={{
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        {" "}
        All Products
      </Typography>
      <ProductsListing products={products} />
    </Container>
  );
};

export default ProductsListingPage;
