import express from "express"
import userRouter from "./routes/user.js"
import taskRouter from "./routes/task.js"
import { connectDB } from "./data/database.js";
import {config} from "dotenv"
import cookieParser from "cookie-parser";


const app = express()
config({
    path:"./config.env"
})
connectDB();



// middlewares to access json data and router
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/users",userRouter);
app.use("/api/v1/tasks", taskRouter);



app.get("/",(req,res)=>{
    res.send("working fine");
})

app.listen(process.env.PORT,()=>{
    console.log("server is working");
})