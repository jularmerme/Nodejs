import express from "express";
import { v4 as uuidv4 } from "uuid";
const router = express.Router();
import {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/users.js";

// All routes in here should be start only with '/'
router.get("/", getUsers);

router.post("/", createUser);

router.get("/:id", getUser);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

export default router;
