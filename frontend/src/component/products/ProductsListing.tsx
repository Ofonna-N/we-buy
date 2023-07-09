import Box from "@mui/material/Box";
import ProductCard from "./ProductCard";
import Grid from "@mui/material/Unstable_Grid2";
import useProducts from "../../hooks/api-hooks/useProducts";
import CircularProgress from "@mui/material/CircularProgress";

const ProductsListing = () => {
  const { data: products, isLoading } = useProducts();

  if (isLoading)
    return <CircularProgress sx={{ marginLeft: "2rem", marginTop: "3rem" }} />;

  return (
    <Box mt={"1rem"}>
      <Grid container spacing={2}>
        {products?.map((product) => {
          return (
            <Grid key={product._id} xs={12} sm={6} md={4} lg={3}>
              <ProductCard product={product} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ProductsListing;
