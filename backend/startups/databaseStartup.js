const mongoose = require("mongoose");
const database = "webuydb";

async function connectDB() {
  try {
    await mongoose.connect(`${process.env.DB_URI}/${database}`);
    console.log("connected to webuydb database");
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = connectDB;
