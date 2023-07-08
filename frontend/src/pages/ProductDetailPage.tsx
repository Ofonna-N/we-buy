import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { useParams } from "react-router-dom";
import products from "../data/products";
import List from "@mui/material/List";
import {
  Button,
  ListItem,
  ListItemText,
  Rating,
  Typography,
} from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
const ProductDetailPage = () => {
  const { id } = useParams();

  const product = products.find((product) => product._id === id);

  const productDetailCellProps = { xs: 12, md: 6 };
  return (
    <Container fixed>
      <Grid container spacing={1} mt={"4rem"}>
        <Grid {...productDetailCellProps}>
          {/* <Paper></Paper> */}
          <img src={product?.image} alt={product?.name} width={"100%"} />
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
            <ListItem divider>
              <Button
                variant="contained"
                size="large"
                sx={{ marginBlock: "1rem" }}
              >
                Add to Cart{" "}
              </Button>
            </ListItem>
            <ListItem divider>
              <Typography variant="subtitle1">
                {" "}
                {product?.description}
              </Typography>
            </ListItem>
            <ListItem divider>
              <Typography variant="h6">
                {product?.countInStock && product?.countInStock > 0
                  ? "In Stock"
                  : "Out of Stock"}
              </Typography>
            </ListItem>
          </List>
        </Grid>
        {/* <Grid {...productDetailCellProps} mdOffset={6} lgOffset={0}>
          <Paper>Product Meta</Paper>
        </Grid> */}
      </Grid>
    </Container>
  );
};

export default ProductDetailPage;
