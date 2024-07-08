const express = require("express");
const { userSchema } = require("../../validation/user.validation");
const {
  getUserByEmail,
  createUser,
  comparePasswords,
  generateToken,
  updateToken,
} = require("../../models/users");

const verifyToken = require("../../middlewares/auth.middleware");
const router = express.Router();

router.post("/login", async (req, res, next) => {
  try {
    const { error, value } = userSchema.validate({
      email: req.body.email,
      password: req.body.password,
    });
    if (error) {
      res.status(400).json({ message: error.message });
    } else {
      const user = await getUserByEmail(value.email);
      const match = await comparePasswords(value.password, user);
      if (!user || !match) {
        return res.status(401).json({ message: "Email or password is wrong" });
      }

      const token = generateToken(user);
      await updateToken(user._id, token);

      res.status(200).json({ email: value.email, token });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/signup", async (req, res, next) => {
  try {
    const { error, value } = userSchema.validate({
      email: req.body.email,
      password: req.body.password,
    });
    if (error) {
      res.status(400).json({ message: error.message });
      return;
    } else {
      const user = await getUserByEmail(value.email);
      if (user !== null) {
        res.status(409).json({ message: "Email in use" });
        return;
      }
      const newUser = await createUser(value);
      res.status(201).json({ email: newUser.email, token: newUser.token });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/logout", verifyToken, async (req, res, next) => {
  try {
    const user = await getUserByEmail(req.email);

    await updateToken(user._id, null);

    res.status(204).json();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/current", verifyToken, async (req, res, next) => {
  try {
    const user = await getUserByEmail(req.email);
    if (user === null) {
      res.status(403).json({ message: "Invalid Access" });
      return;
    }
    res.status(200).json({ email: user.email, subscription: user.subscription });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
