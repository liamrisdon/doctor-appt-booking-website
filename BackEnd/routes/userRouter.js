import express from "express";
import { updateUser, deleteUser, getAllUsers, getSingleUser, getUserProfile, getMyAppointments } from "../controllers/user.controller.js";
import { authenticate } from "../middleware/verifyToken.js";

const router = express.Router();

router.get('/:id', authenticate, getSingleUser)
router.get('/', authenticate, getAllUsers);
router.put('/:id', authenticate, updateUser);
router.delete('/:id', authenticate, deleteUser);
router.get("/profile/me", authenticate, getUserProfile);
router.get("appointments/my-appointments", authenticate, getMyAppointments);

export default router;