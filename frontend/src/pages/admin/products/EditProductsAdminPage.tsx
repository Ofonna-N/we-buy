import { Alert, Box, Stack, Typography } from "@mui/material";
import AppContainer from "../../../component/page/AppContainer";
import { useLocation } from "react-router-dom";
import AppBackButton from "../../../component/interactive/clickables/AppBackButton";
import Product from "../../../types/Product";
import EditProductsForm from "./container/EditProductsForm";

const EditProductsAdminPage = () => {
  const location = useLocation();

  const productJSON = new URLSearchParams(location.search).get("product");
  const product = JSON.parse(productJSON || "{}") as Product;

  if (!product?._id)
    return (
      <Alert
        severity="error"
        sx={{ mt: 2, marginX: "auto", maxWidth: "50rem" }}
      >
        Product not found
      </Alert>
    );

  return (
    <AppContainer>
      <Stack
        sx={{
          flexDirection: {
            direction: "column",
            sm: "row",
          },
          justifyContent: {
            justifyContent: "center",
            sm: "space-between",
          },
          alignItems: "center",
        }}
        mb={2}
      >
        <Typography variant="h4" mb={"2rem"}>
          {" "}
          Edit Product{" "}
          <Box component={"span"} fontSize={"1.35rem"}>
            {product._id}
          </Box>
        </Typography>
        <AppBackButton />
      </Stack>
      <EditProductsForm product={product} />
    </AppContainer>
  );
};

export default EditProductsAdminPage;
