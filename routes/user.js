import express from "express";
import { registerUser, getAllUsers, getUser } from "../controllers/user.js";

const router = express.Router();


// api to get all users in the db
router.get("/users/all",getAllUsers);

//api to register new user
router.post("/users/new", registerUser);

// api to specific user by id in the db
router.get("/usersid/:id", getUser)



export default router;

