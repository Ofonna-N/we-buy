require("dotenv").config();
const express = require("express");
const app = express();

const startServer = require("./startups/serverStartup");
const connectDB = require("./startups/databaseStartup");

const homeRoute = require("./routes/homeRoute");
const productsRoute = require("./routes/productsRoute");

app.use("/", homeRoute);
app.use("/api", productsRoute);

startServer(app);
connectDB();
