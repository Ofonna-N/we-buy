import { Box, Pagination, Stack, Typography } from "@mui/material";
import ProductsListing from "./components/ProductsListing";
import useQueryProducts from "../../hooks/api-hooks/products/useQueryProducts";
import AppContainer from "../../component/page/AppContainer";
import AppSpinner from "../../component/loading/AppSpinner";
import React from "react";
import { useAppSelector } from "../../hooks/redux-hooks/appStoreHooks";

const ProductsListingPage = () => {
  const [pageNum, setPageNum] = React.useState(1); // [1, 2, 3, 4, 5
  const keyword = useAppSelector((state) => state.productsSearchKeywordSlice);
  const {
    data: productsResponse,
    isLoading,
    error,
  } = useQueryProducts(`pageNumber=${pageNum}&keyword=${keyword}`);

  if (isLoading)
    return <AppSpinner sx={{ marginLeft: "2rem", marginTop: "3rem" }} />;
  // console.log("ERROR: ", error?.message);

  if (error) throw new Error(error.message);
  // console.log(productsResponse);
  return (
    <AppContainer fullHeight>
      <Typography
        component={"h2"}
        fontSize={"1.8rem"}
        mb={"0.5rem"}
        sx={{
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        {" "}
        All Products
      </Typography>
      <Box
        sx={{
          // backgroundColor: "yellowgreen",
          height: "85%",
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        <ProductsListing products={productsResponse?.products || []} />
      </Box>
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

export default ProductsListingPage;
