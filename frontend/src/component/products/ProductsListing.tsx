import Box from "@mui/material/Box";
import ProductCard from "./ProductCard";
import Grid from "@mui/material/Unstable_Grid2";

import Product from "../../types/Product";

type Props = {
  products: Product[];
};

const ProductsListing = ({ products }: Props) => {
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
