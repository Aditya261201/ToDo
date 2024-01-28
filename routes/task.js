import express from "express";
import { newTask, getMyTasks } from "../controllers/task.js";
import { isAuthenticated } from "../middlewares/auth.js";


const router = express.Router();


router.post("/new",isAuthenticated,newTask);
router.get("/mytasks",isAuthenticated,getMyTasks);




export default router;

