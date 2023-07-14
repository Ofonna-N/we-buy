require("dotenv").config();
const connectDB = require("../startups/databaseStartup");

const { Product } = require("../models/productsModel");
const { User } = require("../models/usersModel");
const { Order } = require("../models/orderModel");

const mockUsers = require("../data/mockUsers");
const mockProducts = require("../data/mockProducts");

const connect = async () => {
  try {
    await connectDB();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

const populateDb = async () => {
  try {
    await connect();
    console.log("populating...");
    await Product.deleteMany();
    await User.deleteMany();
    await Order.deleteMany();

    const users = await User.insertMany(mockUsers);
    const adminId = users[0]._id;
    const productsRemap = mockProducts.map((product) => ({
      ...product,
      user: adminId,
    }));

    await Product.insertMany(productsRemap);
    console.log("populated");
    process.exit();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

const depopulateDb = async () => {
  try {
    await connect();
    console.log("depopulating...");
    await Product.deleteMany();
    await User.deleteMany();
    await Order.deleteMany();
    console.log("depopulated");
    process.exit();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

if (process.argv[2] !== "-d") {
  populateDb();
} else {
  depopulateDb();
}
