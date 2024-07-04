const { Schema, model } = require("mongoose");
const Joi = require("joi");
//const { email } = require("../archivos antiguos/validation/user.validation");

const userSchema = Schema(
  {
    name: {
      type: String,
      require: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      trim: true,
    },
    token: {
      type: String,
      default: null,
    },
    /*
    verificationToken: {
      type: String,
      required: [true, "Verify token is required"],
    },
    */
    // Probablemente haya que guardar en el usuario peso altura y demas datos.
  },
  {
    versionKey: false,
  }
);

const User = model("users", userSchema);

// Validaciones con JOI
const addUserSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(20).required(),
});

module.exports = {
  User,
  addUserSchema,
};
