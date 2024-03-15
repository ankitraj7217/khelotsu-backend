import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { addPersonsInRoom, createRoom, removePersonInRoom } from "../controllers/room.controller.js";

const router = Router();

router.post("/createRoom").post(verifyJWT, createRoom);
router.post("/addUsersInRoom").post(verifyJWT, addPersonsInRoom);
router.post("/removePersonInRoom").post(verifyJWT, removePersonInRoom);

export default router;