import express from "express"
import mongoose from "mongoose";


const app = express()

// middleware to access json data
app.use(express.json());




mongoose.connect("mongodb://127.0.0.1:27017", {
    dbName: "backendapi",
})
.then(() => console.log("Database connected"))
.catch((e) => console.log(e));


const schema = mongoose.Schema({
    name: String,
    email:String,
    password:String,
})

const User = mongoose.model("User",schema);

app.get("/",(req,res)=>{
    res.send("working fine");
})

// api to get all users in the db
app.get("/users/all",async (req,res)=>{

    const users = await User.find({});

    res.json({
        success: true,
        users: users,
    })
})
// api to specific user by id in the db
app.get("/usersid/:id",async (req,res)=>{

    const {id} = req.params;
    const user= await User.findById(id);

    res.json({
        success: true,
        users: user,
    })
})
app.post("/users/new",async (req,res)=>{
    // passesd in body in json using postman
    const {name,email,password} = req.body;

    await User.create({
        name,
        email,
        password,
    })
    res.status(201).json({
        success: true,
        message: "Registered Successfully",
    })
})


app.listen(4000,()=>{
    console.log("server is working");
})