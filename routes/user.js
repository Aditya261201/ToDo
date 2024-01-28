import express from "express";


import { registerUser, getMydetails, logout , login} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/login", login);
router.post("/new", registerUser);
router.get("/logout", logout);
router.get("/me", isAuthenticated,getMydetails)




export default router;

