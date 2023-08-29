const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const yup = require("yup");
const { type, required } = require("../services/defaults");

const usersMongooseSchema = new mongoose.Schema(
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
  {
    timestamps: true,
    methods: {
      async matchPassword(password) {
        return await bcrypt.compare(password, this.password);
      },
    },
  }
);

usersMongooseSchema.pre("save", async function (next) {
  try {
    console.log(this, "user DOC!!!");
    if (!this.isModified("password")) return next();
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(this.password, salt);
    this.password = password;

    return next();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  // this.password =
});

const UserModel = mongoose.model("User", usersMongooseSchema);

const usersYupLoginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const usersYupRegisterSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});

async function validateLoginSchema(credentials) {
  return await usersYupLoginSchema.validate(credentials);
}

async function validateRegistrationSchema(credentials) {
  return await usersYupRegisterSchema.validate(credentials);
}

module.exports.validateLoginSchema = validateLoginSchema;

module.exports.validateRegistrationSchema = validateRegistrationSchema;

module.exports.User = UserModel;
