import { Alert } from "@mui/material";
import AppContainer from "../../../component/page/AppContainer";
import { useLocation } from "react-router-dom";
import Product from "../../../types/Product";
import EditProductsForm from "./container/EditProductsForm";
import AppPageHeader from "../../../component/page/AppPageHeader";

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
      <AppPageHeader title={"Edit Product"} titlePostfix={product._id} />
      <EditProductsForm product={product} />
    </AppContainer>
  );
};

export default EditProductsAdminPage;
