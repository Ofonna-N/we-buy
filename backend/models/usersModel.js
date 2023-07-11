const mongoose = require("mongoose");
const { type, required } = require("../services/defaults");

const usersSchema = new mongoose.Schema(
  {
    name: {
      type,
      required,
    },
    email: {
      type,
      required,
    },
    password: {
      type,
      required,
    },
    isAdmin: {
      type: Boolean,
      required,
      default: false,
    },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("User", usersSchema);

module.exports.User = UserModel;
