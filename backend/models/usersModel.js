const mongoose = require("mongoose");
const bycript = require("bcrypt");
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

usersSchema.pre("save", async function (next) {
  try {
    console.log(this, "user DOC!!!");
    if (!this.isModified("password")) return next();
    const password = await bycript.hash(this.password, 10);
    this.password = password;

    return next();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  // this.password =
});

const UserModel = mongoose.model("User", usersSchema);

module.exports.User = UserModel;
