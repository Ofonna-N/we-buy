import { Box, Button, Stack, Typography } from "@mui/material";
import AppContainer from "../../../component/page/AppContainer";
import { useNavigate } from "react-router-dom";
import useQueryProducts from "../../../hooks/api-hooks/products/useQueryProducts";
import AppProductsTable from "../../../component/common/AppProductsTable";
import RoutesPaths from "../../../constants/RoutePaths";
import Product from "../../../types/Product";
import React from "react";
import AdminProductsActionModal from "./components/AdminProductsActionModal";
import ProductModalDataType from "../types/ProductModalDataType";
import AppBackButton from "../../../component/interactive/clickables/AppBackButton";

const ProductsAdminPage = () => {
  const { data: products, isLoading, error } = useQueryProducts();
  const [productModalData, setProductModalData] =
    React.useState<ProductModalDataType>({} as ProductModalDataType);

  const navigate = useNavigate();

  const onEditProduct = (product: Product) => {
    const serializedData = JSON.stringify(product);
    navigate(product._id + "?product=" + serializedData, { relative: "path" });
  };

  const onDeleteProduct = (product: Product) => {
    setProductModalData({
      isOpen: true,
      title: "Delete Product",
      message: `Are you sure you want to delete ${product.name}?`,
      onYesClick: () => {
        setProductModalData((prev) => ({ ...prev, isOpen: false }));
      },
      onNoClick: () => {
        setProductModalData((prev) => ({ ...prev, isOpen: false }));
      },
      onClose: () => {
        setProductModalData((prev) => ({ ...prev, isOpen: false }));
      },
    });
  };

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
          alignItems: {
            alignItems: "center",
          },
        }}
        mb={2}
      >
        <Typography variant="h4" mb={{ xs: "2rem", md: 0 }}>
          Products
        </Typography>
        <Box display={"flex"} gap={2}>
          <AppBackButton />
          <Button variant="contained" color="secondary">
            Create Product
          </Button>
        </Box>
      </Stack>
      <AppProductsTable
        products={products}
        productError={error}
        productIsLoading={isLoading}
        isAdmin={true}
        onRowClick={(product) => {
          navigate(RoutesPaths.PRODUCTS_ROUTE + "/" + product._id);
        }}
        onEditClick={onEditProduct}
        onDeleteClick={onDeleteProduct}
      />
      <AdminProductsActionModal modalData={productModalData} />
    </AppContainer>
  );
};

export default ProductsAdminPage;
