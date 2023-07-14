const mongoose = require("mongoose");
// const database = "webuydb";

async function connectDB() {
  try {
    await mongoose.connect(`${process.env.DB_URI}`);
    console.log(
      "connected to webuydb database: ",
      `${process.env.DB_URI}/${database}`
    );
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = connectDB;
