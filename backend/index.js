require("dotenv").config();
const express = require("express");
const app = express();

const startServer = require("./startups/serverStartup");
const connectDB = require("./startups/databaseStartup");

const homeRoute = require("./routes/home");
const productsRoute = require("./routes/products");

app.use("/", homeRoute);
app.use("/api", productsRoute);

startServer(app);
connectDB();
