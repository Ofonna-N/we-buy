import { CircularProgress, Container, Typography } from "@mui/material";
import ProductsListing from "../component/products/ProductsListing";
import useProducts from "../hooks/api-hooks/useProducts";
import { useGetProductsQuery } from "../slices/productsSlice";
import Product from "../types/Product";

const ProductsListingPage = () => {
  // const { data: products, isLoading, error } = useProducts();
  const { data: products, isLoading, error } = useGetProductsQuery({});
  if (isLoading)
    return <CircularProgress sx={{ marginLeft: "2rem", marginTop: "3rem" }} />;

  // if (error) throw new Error(error?);
  console.log(error, "Error");

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
