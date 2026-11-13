const taskModel = require("../models/taskModel");

const getAllTasks = (req, res) => {
    const tasks = taskModel.getAllTasks();

    res.status(200).json({
        success: true,
        count: tasks.length,
        data: tasks
    });
};

const getTaskById = (req, res) => {
    const task = taskModel.getTaskById(req.params.id);

    if (!task) {
        return res.status(404).json({
            success: false,
            message: "Task not found"
        });
    }

    res.status(200).json({
        success: true,
        data: task
    });
};

const createTask = (req, res) => {
    const {
        title,
        description,
        assignedTo,
        priority,
        status,
        dueDate
    } = req.body;

    // Check required fields
   if (
    !title?.trim() ||
    !description?.trim() ||
    !assignedTo?.trim() ||
    !priority ||
    !status ||
    !dueDate
) {
    return res.status(400).json({
        success: false,
        message: "All fields are required"
    });
}
    // Validate priority
    if (!["Low", "Medium", "High"].includes(priority)) {
        return res.status(400).json({
            success: false,
            message: "Priority must be Low, Medium, or High"
        });
    }
// Validate status
if (!["Pending", "In Progress", "Completed"].includes(status)) {
    return res.status(400).json({
        success: false,
        message: "Status must be Pending, In Progress, or Completed"
    });
}


// Validate due date
const date = new Date(`${dueDate}T00:00:00`);

if (
    !/^\d{4}-\d{2}-\d{2}$/.test(dueDate) ||
    isNaN(date.getTime()) ||
    date.toISOString().slice(0, 10) !== dueDate
) {
    return res.status(400).json({
        success: false,
        message: "Please enter a valid date in YYYY-MM-DD format"
    });
} // Create task
    const newTask = taskModel.createTask(req.body);

    res.status(201).json({
        success: true,
        message: "Task created successfully",
        data: newTask
    });
};

const updateTask = (req, res) => {
    console.log("PUT ID:", req.params.id);
const updatedTask = taskModel.updateTask(req.params.id, req.body);

    if (!updatedTask) {
        return res.status(404).json({
            success: false,
            message: "Task not found"
        });
    }

    res.status(200).json({
        success: true,
        message: "Task updated successfully",
        data: updatedTask
    });
};


const patchTask = (req, res) => {
    const updatedTask = taskModel.updateTask(req.params.id, req.body);

    if (!updatedTask) {
        return res.status(404).json({
            success: false,
            message: "Task not found"
        });
    }

    res.status(200).json({
        success: true,
        message: "Task partially updated successfully",
        data: updatedTask
    });
};

const deleteTask = (req, res) => {
    const deletedTask = taskModel.deleteTask(req.params.id);

    if (!deletedTask) {
        return res.status(404).json({
            success: false,
            message: "Task not found"
        });
    }

    res.status(200).json({
        success: true,
        message: "Task deleted successfully",
        data: deletedTask
    });
}; 


const getTasksByStatus = (req, res) => {
    const tasks = taskModel.getTasksByStatus(req.params.status);

    res.status(200).json({
        success: true,
        count: tasks.length,
        data: tasks
    });
}; 


const getTasksByPriority = (req, res) => {
    const tasks = taskModel.getTasksByPriority(req.params.priority);

    res.status(200).json({
        success: true,
        count: tasks.length,
        data: tasks
    });
};
const getTaskSummary = (req, res) => {
    const summary = taskModel.getTaskSummary();

    res.status(200).json({
        success: true,
        data: summary
    });
};


module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    patchTask,
    deleteTask,
    getTasksByStatus,
    getTasksByPriority,
    getTaskSummary
};