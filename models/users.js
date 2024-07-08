const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const users = require("../validation/user.validationdb");

const getUserByEmail = async (email) => {
  return await users.findOne({ email }).exec();
};

const createUser = async (body) => {
  const hashedPassword = await bcrypt.hash(body.password, parseInt(process.env.SALT));
  const user = new users({
    email: body.email,
    password: hashedPassword,
  });
  await user.save();
  const token = generateToken(user);
  user.token = token;
  await user.save();
  return user;
};

const comparePasswords = async (textPassword, user) => {
  return await bcrypt.compare(textPassword, user.password);
};

const generateToken = (user) => {
  return jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

const updateToken = async (id, token) => {
  await users.findByIdAndUpdate(id, { token }).exec();
};

module.exports = {
  getUserByEmail,
  createUser,
  comparePasswords,
  generateToken,
  updateToken,
};
