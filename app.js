import express from "express"
import userRouter from "./routes/user.js"
import { connectDB } from "./data/database.js";
import {config} from "dotenv"


const app = express()
config({
    path:"./config.env"
})
connectDB();



// middlewares to access json data and router
app.use(express.json());
app.use(userRouter);



app.get("/",(req,res)=>{
    res.send("working fine");
})

app.listen(process.env.PORT,()=>{
    console.log("server is working");
})