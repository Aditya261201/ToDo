import express from "express";


import { registerUser, getAllUsers, getUser , login} from "../controllers/user.js";

const router = express.Router();


router.get("/all",getAllUsers);
router.post("/login", login);
router.post("/new", registerUser);
router.get("/:id",getUser)




export default router;

