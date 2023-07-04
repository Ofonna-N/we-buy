import { Container, Typography } from "@mui/material";
import ProductsListing from "../component/products/ProductsListing";

const ProductsListingPage = () => {
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
      <ProductsListing />
    </Container>
  );
};

export default ProductsListingPage;
