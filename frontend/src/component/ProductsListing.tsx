import { Card, CardActionArea, CardContent, CardHeader } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import products from "../data/products";

const ProductsListing = () => {
  return (
    <Container
      fixed
      sx={{
        marginTop: "2rem",
      }}
    >
      <Typography
        variant="h4"
        component={"h2"}
        mb={"2rem"}
        sx={{
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        {" "}
        Products Listing
      </Typography>
      <Box mt={"1rem"}>
        <Grid container spacing={2}>
          {products.map((product) => {
            return (
              <Grid key={product._id} xs={12} sm={6} md={4} lg={3}>
                <Card
                  raised={true}
                  sx={{ maxWidth: "17rem", marginInline: "auto" }}
                >
                  <CardActionArea href="#">
                    <CardMedia
                      src={product.image}
                      component="img"
                      alt="product Image"
                      height={"240"}
                    />

                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="subtitle2"
                        component={"h3"}
                      >
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
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
};

export default ProductsListing;
