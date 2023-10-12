import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { useParams } from "react-router-dom";
import List from "@mui/material/List";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Divider,
  FormControl,
  Input,
  ListItem,
  ListItemText,
  Paper,
  Rating,
  Typography,
} from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import useQuerySingleProduct from "../hooks/api-hooks/products/useQuerySingleProduct";
import { useMemo, useState } from "react";
import { CartItem } from "../types/Cart";
import {
  useAppDispatch,
  useAppSelector,
} from "../hooks/redux-hooks/appStoreHooks";
import { cartActions } from "../slices/cartSlice";
import AppContainer from "../component/page/AppContainer";
import ProductComment from "./productDetailPage/component/ProductComment";
import ProductCommentForm from "./productDetailPage/component/ProductCommentForm";
import CommentReveiw from "./productDetailPage/types/CommentReveiw";
import useMutateAddReveiw from "../hooks/api-hooks/products/useMutateAddReveiw";
import AppBackButton from "../component/interactive/clickables/AppBackButton";

const ProductDetailPage = () => {
  const { id } = useParams();

  const [qty, setQty] = useState<number>(1);

  const dispach = useAppDispatch();
  const isAdmin = useAppSelector((state) => state.userSlice.userInfo?.isAdmin);
  const userId = useAppSelector((state) => state.userSlice.userInfo?._id);
  const { data: product, isLoading, error } = useQuerySingleProduct(id || "");
  const { mutate: addReview } = useMutateAddReveiw(id || "");

  const hasReviewed = useMemo(() => {
    return !!product?.reviews.find((review) => review.user === userId);
  }, [product?.reviews, userId]);

  if (isLoading)
    return <CircularProgress sx={{ marginLeft: "2rem", marginTop: "3rem" }} />;

  if (error) throw Error(error.message);

  const productDetailCellProps = { xs: 12, md: 6 };

  const addToCart = (cartItem: CartItem) => {
    dispach(cartActions.addToCart({ cartItem }));
  };

  const onAddReview = (data: CommentReveiw) => {
    addReview(data);
    // console.log("Add comment", data);
  };

  return (
    <AppContainer>
      <Box>
        <AppBackButton />
      </Box>
      <Grid container spacing={1} mb={1} mt={2}>
        <Grid {...productDetailCellProps}>
          {/* <Paper></Paper> */}
          <img
            src={product?.image}
            alt={product?.name}
            width={"100%"}
            loading="lazy"
          />
        </Grid>
        <Grid {...productDetailCellProps}>
          <List>
            <ListItem divider>
              <ListItemText
                primary={<Typography variant="h3">{product?.name}</Typography>}
              />
            </ListItem>
            <ListItem divider>
              <ListItemText
                primary={
                  <Rating
                    name="p-rating"
                    value={product?.rating}
                    readOnly
                    precision={0.5}
                    emptyIcon={
                      <StarBorderIcon
                        sx={{ opacity: 0.55 }}
                        fontSize="inherit"
                      />
                    }
                    size="medium"
                  />
                }
              />
            </ListItem>
            <ListItem divider>
              <ListItemText
                primary={
                  <Typography variant="h5">Price: ${product?.price}</Typography>
                }
              />
            </ListItem>
            {!isAdmin && (
              <ListItem
                divider
                sx={{
                  gap: "1rem",
                  flexDirection: { flexDirection: "column", sm: "row" },
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  sx={{ marginBlock: "1rem" }}
                  onClick={() => {
                    if (!product) {
                      // console.log("add to cart Quantity");
                      return;
                    }
                    addToCart({ product, qty });
                  }}
                >
                  Add to Cart{" "}
                </Button>
                <FormControl
                  sx={{
                    flexGrow: 1,
                    flexDirection: "row",
                    alignItems: "end",
                    gap: "1rem",
                  }}
                >
                  {/* <InputLabel>Quantity</InputLabel> */}
                  <Typography variant="h6">Quantity:</Typography>
                  <Input
                    value={qty}
                    onChange={(e) => setQty(Number(e.target.value))}
                    onBlur={(e) => {
                      if (
                        product?.countInStock &&
                        Number(e.target.value) > product?.countInStock
                      )
                        setQty(product?.countInStock || 1);
                    }}
                    slotProps={{
                      input: {
                        min: 1,
                        max: product?.countInStock,
                        type: "number",
                      },
                    }}
                  />
                </FormControl>
              </ListItem>
            )}
            <ListItem divider>
              <Typography variant="h6">
                {product?.countInStock && product?.countInStock > 0
                  ? "In Stock"
                  : "Out of Stock"}
              </Typography>
            </ListItem>
            <ListItem divider>
              <Typography variant="subtitle1">
                {" "}
                {product?.description}
              </Typography>
            </ListItem>
          </List>
        </Grid>
        {/* <Grid {...productDetailCellProps} mdOffset={6} lgOffset={0}>
          <Paper>Product Meta</Paper>
        </Grid> */}
      </Grid>
      <Box mb={5}>
        <Paper sx={{ padding: 1, marginBottom: 1 }} square>
          <Typography variant="h5">Reviews</Typography>
        </Paper>
        <Box>
          <List>
            {product?.reviews && product.reviews.length > 0 ? (
              product.reviews.map((review, i) => (
                <ListItem key={i} divider={i !== product.reviews.length - 1}>
                  <ProductComment
                    name={review.name}
                    rating={review.rating}
                    comment={review.comment}
                    createdAt={new Date(review?.createdAt).toLocaleDateString()}
                  />
                </ListItem>
              ))
            ) : (
              <ListItem>
                <Alert severity="info" sx={{ width: "100%" }}>
                  No Reviews
                </Alert>
              </ListItem>
            )}
          </List>
          {!isAdmin && !hasReviewed && (
            <Box>
              <Divider />
              <Paper sx={{ padding: 1, marginBottom: 2 }} square>
                <Typography variant="h5">Write a Customer Review</Typography>
              </Paper>
              <Box maxWidth={"30rem"}>
                <ProductCommentForm onSubmit={onAddReview} />
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </AppContainer>
  );
};

export default ProductDetailPage;
