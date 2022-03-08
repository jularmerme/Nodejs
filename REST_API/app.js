import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 4000;

app.use(bodyParser.json());

app.use("/users", usersRoutes);

app.get("/", (req, res) =>
  res.send(`Node and Express server running on port ${PORT}`)
);

app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));
