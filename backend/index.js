require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const startServer = require("./startups/serverStartup");
const connectDB = require("./startups/databaseStartup");
const appMiddleware = require("./middleware/appMiddleware");

const homeRoute = require("./routes/homeRoute");
const productsRoute = require("./routes/productsRoute");
const usersRoute = require("./routes/usersRoute");
const errorRoute = require("./middleware/errorMiddleware");

app.use(appMiddleware);
app.use("/", homeRoute);
app.use("/api/products", productsRoute);
app.use("/api/users", usersRoute);
app.use(errorRoute);

startServer(app);
connectDB();
