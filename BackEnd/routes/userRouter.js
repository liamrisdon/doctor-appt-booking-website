import express from "express";
import { updateUser, deleteUser, getAllUsers, getSingleUser } from "../controllers/user.controller.js";
import { authenticate } from "../middleware/verifyToken.js";

const router = express.Router();

router.get('/:id', authenticate, getSingleUser)
router.get('/', authenticate, getAllUsers);
router.put('/:id', authenticate, updateUser);
router.delete('/:id', authenticate, deleteUser);

export default router;