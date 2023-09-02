import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { useParams } from "react-router-dom";
import List from "@mui/material/List";
import {
  Button,
  CircularProgress,
  FormControl,
  Input,
  ListItem,
  ListItemText,
  Rating,
  Typography,
} from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import useQuerySingleProduct from "../hooks/api-hooks/useQuerySingleProduct";
import { useState } from "react";
import { CartItem } from "../types/Cart";
import { useAppDispatch } from "../hooks/redux-hooks/appStoreHooks";
import { cartActions } from "../slices/cartSlice";
import AppContainer from "../component/page/AppContainer";

const ProductDetailPage = () => {
  const { id } = useParams();

  const [qty, setQty] = useState<number>(1);

  const dispach = useAppDispatch();

  const { data: product, isLoading, error } = useQuerySingleProduct(id || "");

  if (isLoading)
    return <CircularProgress sx={{ marginLeft: "2rem", marginTop: "3rem" }} />;

  if (error) throw Error(error.message);

  const productDetailCellProps = { xs: 12, md: 6 };

  const addToCart = (cartItem: CartItem) => {
    dispach(cartActions.addToCart({ cartItem }));
  };

  return (
    <AppContainer>
      <Grid container spacing={1} mt={"4rem"}>
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
                    console.log("add to cart Quantity");
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
    </AppContainer>
  );
};

export default ProductDetailPage;
