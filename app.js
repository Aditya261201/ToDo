import express from "express"
import userRouter from "./routes/user.js"
import taskRouter from "./routes/task.js"
import { connectDB } from "./data/database.js";
import {config} from "dotenv"
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";


const app = express()
config({
    path:"./config.env"
})
connectDB();



// middlewares to access json data and router
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: "http://localhost:5173/",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true
    })
);

app.use("/api/v1/users",userRouter);
app.use("/api/v1/tasks", taskRouter);



app.get("/",(req,res)=>{
    res.send("working fine");
})

app.listen(process.env.PORT,()=>{
    console.log(`server working on port:${process.env.PORT} in ${process.env.NODE_ENV} mode`);
})



// using error middleware
app.use(errorMiddleware);