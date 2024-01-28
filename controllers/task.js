import {Task} from "../models/task.js"



//--------------------------------------------------
export const newTask = async (req,res)=>{
    const {title,description}=req.body;

    await Task.create({
        title,
        description,
        user:req.user,
    })

    res.status(201).json({
        success:true,
        message:"Task added Successfully"
    })
}


//--------------------------------------------------
export const getMyTasks = async (req,res)=>{

    const userid = req.user._id;
    const tasks = await Task.find({user: userid});

    res.status(201).json({
        success:true,
        message:"Tasks fetched Successfully",
        tasks,
    })
}


//--------------------------------------------------
export const updateTask = async (req,res)=>{

    const {id} = req.params;

    const task = await Task.findById(id);

    if (!task) {
        res.status(404).json({
            success: false,
            message: "Invalid id"
        })
    }

    task.isCompleted = !task.isCompleted;
    await task.save();

    res.status(201).json({
        success:true,
        message:"Tasks Updated Successfully",
    })
}


//--------------------------------------------------
export const deleteTask = async (req,res)=>{

    const { id } = req.params;
    const task = await Task.findById(id);

    if(!task){
        res.status(404).json({
            success: false,
            message: "Invalid id"
        })
    }

    await task.deleteOne();

    res.status(201).json({
        success:true,
        message:"Tasks Deleted Successfully",
    })
}