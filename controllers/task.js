import { Task } from "../models/task.js"
import ErrorHandler from '../middlewares/error.js'




//--------------------------------------------------
export const newTask = async (req, res) => {
    try {
        const { title, description } = req.body;

        await Task.create({
            title,
            description,
            user: req.user,
        })

        res.status(201).json({
            success: true,
            message: "Task added Successfully"
        })
    } catch (error) {
        next(error);
    }
}


//--------------------------------------------------
export const getMyTasks = async (req, res) => {
    try {
        const userid = req.user._id;
        const tasks = await Task.find({ user: userid });

        res.status(201).json({
            success: true,
            message: "Tasks fetched Successfully",
            tasks,
        })
    } catch (error) {
        next(error);
    }
}


//--------------------------------------------------
export const updateTask = async (req, res, next) => {
    try {
        const { id } = req.params;

        const task = await Task.findById(id);

        if (!task) return next(new ErrorHandler("Invalid id"));

        task.isCompleted = !task.isCompleted;
        await task.save();

        res.status(201).json({
            success: true,
            message: "Tasks Updated Successfully",
        })
    } catch (error) {
        next(error)
    }
}


//--------------------------------------------------
export const deleteTask = async (req, res, next) => {
    try {
        const { id } = req.params;
        const task = await Task.findById(id);

        if (!task) return next(new ErrorHandler());


        await task.deleteOne();

        res.status(201).json({
            success: true,
            message: "Tasks Deleted Successfully",
        })
    } catch (error) {
        next(error)
    }
}