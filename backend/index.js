require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const startServer = require("./startups/serverStartup");
const connectDB = require("./startups/databaseStartup");
const appDefaultMiddleware = require("./middleware/appDefaultMiddleware");

const homeRoute = require("./routes/homeRoute");
const productsRoute = require("./routes/productsRoute");
const usersRoute = require("./routes/usersRoute");
const ordersRoute = require("./routes/ordersRoute");
const paypalRoute = require("./routes/paypalRoute");
const fallbackRoute = require("./routes/fallbackRoute");
const errorRoute = require("./middleware/errorMiddleware");

app.use(appDefaultMiddleware);
app.use("/", homeRoute);
app.use("/api/products", productsRoute);
app.use("/api/users", usersRoute);
app.use("/api/orders", ordersRoute);
app.use("/api/paypal", paypalRoute);
app.use(errorRoute);
app.use("*", fallbackRoute);

startServer(app);
connectDB();
