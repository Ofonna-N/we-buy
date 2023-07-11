import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Rating,
  Stack,
} from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Link as RouterLink } from "react-router-dom";
import Product from "../../types/Product";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <Card
      raised={true}
      sx={{
        maxWidth: "17rem",
        marginInline: "auto",
        "&": {
          transition: "transform 0.15s",
        },
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardActionArea component={RouterLink} to={`/product/${product._id}`}>
        <CardMedia
          src={product.image}
          component="img"
          alt="product Image"
          height={"240"}
          loading="lazy"
        />

        <CardContent>
          <Typography
            variant="body1"
            component={"h3"}
            marginBottom={"10px"}
            noWrap
          >
            {product.name}
          </Typography>
          <Stack
            direction={"row"}
            alignContent={"center"}
            spacing={1}
            mb={"5px"}
          >
            <Rating
              name="card-rating"
              value={product.rating}
              readOnly
              precision={0.5}
              emptyIcon={
                <StarBorderIcon sx={{ opacity: 0.55 }} fontSize="inherit" />
              }
              size="small"
            />
            <Typography fontSize={".85rem"}>
              {product.numReviews} reviews
            </Typography>
          </Stack>
          <Typography
            component={"p"}
            sx={{
              fontWeight: "200",
              fontSize: "1.5rem",
            }}
          >
            ${product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
