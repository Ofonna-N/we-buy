const express = require("express");
const products = require("./data/products");

const app = express();

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  return res.send("Hello world!");
});

app.get("/api/products", (req, res) => {
  return res.json({ data: products });
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  //   console.log(product);
  return product
    ? res.json({ data: product })
    : res.status(404).send("Product Not found");
});

app.listen(port, () => {
  console.log("listening on port: " + port);
});
