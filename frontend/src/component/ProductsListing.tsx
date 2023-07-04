import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import products from "../data/products";
import ProductCard from "./ProductCard";

const ProductsListing = () => {
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
        Products Listing
      </Typography>
      <Box mt={"1rem"}>
        <Grid container spacing={2}>
          {products.map((product) => {
            return (
              <Grid
                key={product._id}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                sx={{
                  "& > .MuiCard-root": {
                    transition: "transform 0.15s",
                  },
                  "& > .MuiCard-root:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <ProductCard product={product} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
};

export default ProductsListing;
