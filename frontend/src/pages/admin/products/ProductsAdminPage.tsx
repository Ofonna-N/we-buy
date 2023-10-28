import { Button, Pagination, Stack } from "@mui/material";
import AppContainer from "../../../component/page/AppContainer";
import { useNavigate } from "react-router-dom";
import useQueryProducts from "../../../hooks/api-hooks/products/useQueryProducts";
import AppProductsTable from "../../../component/common/AppProductsTable";
import RoutesPaths from "../../../constants/RoutePaths";
import Product from "../../../types/Product";
import useMutateCreateProduct from "../../../hooks/api-hooks/products/useMutateCreateProduct";
import useMutateDeleteProduct from "../../../hooks/api-hooks/products/useMutateDeleteProduct";
import AppPageHeader from "../../../component/page/AppPageHeader";
import useBasicConfirmationDialog from "../../../hooks/useBasicConfirmationDialog";
import React from "react";

const ProductsAdminPage = () => {
  const [pageNum, setPageNum] = React.useState(1); // [1, 2, 3, 4, 5
  const {
    data: productsResponse,
    isLoading,
    error,
    refetch: refetchProducts,
  } = useQueryProducts(`pageNumber=${pageNum}`);
  // const [productModalData, setProductModalData] =
  //   React.useState<ProductModalDataType>({} as ProductModalDataType);
  const setConfirmationDialog =
    useBasicConfirmationDialog().setBasicConfirmationDialogState;
  const closeConfirmationDialog =
    useBasicConfirmationDialog().clearBasicConfirmationDialogState;
  const navigate = useNavigate();

  const { mutate: createProduct, isSuccess: isCreatedProductSucess } =
    useMutateCreateProduct();

  const { mutate: deleteProduct, isSuccess: isDeletedProductSucess } =
    useMutateDeleteProduct();

  React.useEffect(() => {
    if (isCreatedProductSucess || isDeletedProductSucess) {
      refetchProducts();
    }
  }, [isCreatedProductSucess, isDeletedProductSucess, refetchProducts]);

  const onCreateProduct = () => {
    setConfirmationDialog({
      open: true,
      title: "Create Product",
      content: "Are you sure you want to create a new product?",
      onConfirm: () => {
        createProduct(null);
        closeConfirmationDialog();
      },
      onCancel: () => {
        closeConfirmationDialog();
      },
    });
  };

  const onEditProduct = (product: Product) => {
    const serializedData = JSON.stringify(product);
    navigate(product._id + "?product=" + serializedData, { relative: "path" });
  };

  const onDeleteProduct = (product: Product) => {
    setConfirmationDialog({
      open: true,
      title: "Delete Product",
      content: `Are you sure you want to delete ${product.name}?`,
      onConfirm: () => {
        deleteProduct(product._id);
        closeConfirmationDialog();
      },
      onCancel: () => {
        closeConfirmationDialog();
      },
    });
  };

  return (
    <AppContainer>
      <AppPageHeader
        title={"Products"}
        rightSlot={
          <Button
            variant="contained"
            color="secondary"
            onClick={onCreateProduct}
          >
            Create Product
          </Button>
        }
      />
      <AppProductsTable
        products={productsResponse?.products || []}
        productError={error}
        productIsLoading={isLoading}
        isAdmin={true}
        onRowClick={(product) => {
          navigate(RoutesPaths.PRODUCTS_ROUTE + "/" + product._id);
        }}
        onEditClick={onEditProduct}
        onDeleteClick={onDeleteProduct}
      />
      {productsResponse?.pageCount && productsResponse?.pageCount > 1 && (
        <Stack alignItems={"center"} py={3}>
          <Pagination
            count={productsResponse?.pageCount}
            page={pageNum}
            onChange={(_, v) => {
              setPageNum(v);
            }}
          />
        </Stack>
      )}
    </AppContainer>
  );
};

export default ProductsAdminPage;
