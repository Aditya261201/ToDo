import express from "express"
import userRouter from "./routes/user.js"
import { connectDB } from "./data/database.js";


const app = express()
connectDB();



// middlewares to access json data and router
app.use(express.json());
app.use(userRouter);



app.get("/",(req,res)=>{
    res.send("working fine");
})

app.listen(4000,()=>{
    console.log("server is working");
})