import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

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
      <CardActionArea href="#">
        <CardMedia
          src={product.image}
          component="img"
          alt="product Image"
          height={"240"}
        />

        <CardContent>
          <Typography gutterBottom variant="subtitle2" component={"h3"}>
            {product.name}
          </Typography>
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
