const { User, addUserSchema } = require("../../schema/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const generateJWT = (userId, name, email) => {
  return jwt.sign({ userId, name, email }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

const generateRefreshToken = (userId, name, email) => {
  return jwt.sign({ userId, name, email }, process.env.JWT_REFRESH_SECRET, { expiresIn: "7d" });
};

const registerUser = async (req, res) => {
  try {
    // Validacion JOI
    const { error } = addUserSchema.validate(req.body);
    if (error) {
      console.log("Validation Error:", error.details);
      return res.status(400).json({
        message: "all required fields",
      });
    }

    // Validacion de BD
    const { password, email } = req.body;
    const foundUser = await User.findOne({ email });
    if (foundUser) {
      return res.status(409).json({
        message: "Correo Electrónico en uso",
      });
    }

    const bcrypSalt = parseInt(process.env.SALT);
    const hashedPassword = bcrypt.hashSync(password, bcrypSalt);
    const createUser = User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    const user = await createUser.save();

    const token = generateJWT(user._id, user.name, user.email);
    const refreshToken = generateRefreshToken(user._id, user.name, user.email);

    await User.findByIdAndUpdate(user._id, {
      token: token,
      refreshToken: refreshToken,
    });

    res.status(201).json({
      token: token,
      refreshToken: refreshToken,
      user: { name: user.name, email: user.email },
    });
  } catch (error) {
    console.log("Error:", error);
    return res.status(500).json({ message: "An error has ocurred (registerUser)" });
  }
};

module.exports = registerUser;
