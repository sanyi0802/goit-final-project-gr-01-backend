const registerUser = require("./registerUser");
const login = require("./login");
const logout = require("./logout");
const current = require("./current");
const refreshTokens = require("./refreshTokens");

module.exports = {
  registerUser,
  login,
  logout,
  current,
  refreshTokens,
};
