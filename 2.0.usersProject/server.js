const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const User = require("./models/user");
const bcrypt = require("bcrypt");

mongoose.connect("mongodb://localhost:27017/login-app-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
app.use("/", express.static(path.join(__dirname, "static")));
app.use(bodyParser.json());

app.use("/api/register", async (req, res) => {
  console.log(req.body);

  // Anaysts
  // Scripts reading databases
  const { username, password: plainTextPassword } = req.body;

  if (!username || typeof username !== "string") {
    return res.json({ status: "error", error: "Invalid username" });
  }

  if (!plainTextPassword || typeof plainTextPassword !== "string") {
    return res.json({ status: "error", error: "Invalid password" });
  }

  if (plainTextPassword.length < 7) {
    return res.json({
      status: "error",
      error: "Password too small. Should be at least 8 characters",
    });
  }

  const password = await bcrypt.hash(plainTextPassword, 10);

  try {
    const response = await User.create({
      username,
      password,
    });
    console.log("User created successfully: ", response);
  } catch (error) {
    if (error.code === 11000) {
      return res.json({ status: "error", error: "username already in use" });
    }
    console.log(error);
  }

  throw error;
});

app.listen(9999, () => {
  console.log("Server up at 9999");
});
