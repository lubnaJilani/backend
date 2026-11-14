
const taskModel = require("../models/taskModel");

// VALID DATE CHECK
const isValidDate = (date) => {
    if (
        typeof date !== "string" ||
        !/^\d{4}-\d{2}-\d{2}$/.test(date)
    ) {
        return false;
    }

    const parsedDate = new Date(`${date}T00:00:00.000Z`);

    return (
        !isNaN(parsedDate.getTime()) &&
        parsedDate.toISOString().slice(0, 10) === date
    );
};

// VALIDATION HELPERS
const validPriorities = ["Low", "Medium", "High"];
const validStatuses = ["Pending", "In Progress", "Completed"];

const validateTask = (data) => {
    const {
        title,
        description,
        assignedTo,
        priority,
        status,
        dueDate
    } = data;

    if (
        typeof title !== "string" || !title.trim() ||
        typeof description !== "string" || !description.trim() ||
        typeof assignedTo !== "string" || !assignedTo.trim() ||
        !priority || !status || !dueDate
    ) {
        return "All fields are required";
    }

    if (!validPriorities.includes(priority)) {
        return "Priority must be Low, Medium, or High";
    }

    if (!validStatuses.includes(status)) {
        return "Status must be Pending, In Progress, or Completed";
    }

    if (!isValidDate(dueDate)) {
        return "Please enter a valid date in YYYY-MM-DD format";
    }

    return null;
};

// GET ALL TASKS
const getAllTasks = (req, res, next) => {
    try {
        const tasks = taskModel.getAllTasks();

        res.status(200).json({
            success: true,
            count: tasks.length,
            data: tasks
        });
    } catch (error) {
        next(error);
    }
};

// GET TASK BY ID
const getTaskById = (req, res, next) => {
    try {
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
    } catch (error) {
        next(error);
    }
};

// CREATE TASK
const createTask = (req, res, next) => {
    try {
        const taskData = req.body || {};
        const validationError = validateTask(taskData);

        if (validationError) {
            return res.status(400).json({
                success: false,
                message: validationError
            });
        }

        const newTask = taskModel.createTask({
            title: taskData.title.trim(),
            description: taskData.description.trim(),
            assignedTo: taskData.assignedTo.trim(),
            priority: taskData.priority,
            status: taskData.status,
            dueDate: taskData.dueDate
        });

        res.status(201).json({
            success: true,
            message: "Task created successfully",
            data: newTask
        });
    } catch (error) {
        next(error);
    }
};

// PUT - REPLACE ENTIRE TASK
const updateTask = (req, res, next) => {
    try {
        const taskData = req.body || {};
        const validationError = validateTask(taskData);

        if (validationError) {
            return res.status(400).json({
                success: false,
                message: validationError
            });
        }

        const updatedTask = taskModel.replaceTask(req.params.id, {
            title: taskData.title.trim(),
            description: taskData.description.trim(),
            assignedTo: taskData.assignedTo.trim(),
            priority: taskData.priority,
            status: taskData.status,
            dueDate: taskData.dueDate
        });

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
    } catch (error) {
        next(error);
    }
};

// PATCH - PARTIALLY UPDATE TASK
const patchTask = (req, res, next) => {
    try {
        const allowedFields = [
            "title",
            "description",
            "assignedTo",
            "priority",
            "status",
            "dueDate"
        ];

        const updates = { ...req.body };
        const fields = Object.keys(updates);

        if (fields.length === 0) {
            return res.status(400).json({
                success: false,
                message: "Please provide at least one field to update"
            });
        }

        const invalidFields = fields.filter(
            field => !allowedFields.includes(field)
        );

        if (invalidFields.length > 0) {
            return res.status(400).json({
                success: false,
                message: `Invalid fields: ${invalidFields.join(", ")}`
            });
        }

        for (const field of ["title", "description", "assignedTo"]) {
            if (field in updates) {
                if (
                    typeof updates[field] !== "string" ||
                    !updates[field].trim()
                ) {
                    return res.status(400).json({
                        success: false,
                        message: `${field} must be a non-empty string`
                    });
                }

                updates[field] = updates[field].trim();
            }
        }

        if (
            "priority" in updates &&
            !validPriorities.includes(updates.priority)
        ) {
            return res.status(400).json({
                success: false,
                message: "Priority must be Low, Medium, or High"
            });
        }

        if (
            "status" in updates &&
            !validStatuses.includes(updates.status)
        ) {
            return res.status(400).json({
                success: false,
                message: "Status must be Pending, In Progress, or Completed"
            });
        }

        if ("dueDate" in updates && !isValidDate(updates.dueDate)) {
            return res.status(400).json({
                success: false,
                message: "Please enter a valid date in YYYY-MM-DD format"
            });
        }

        const updatedTask = taskModel.updateTask(
            req.params.id,
            updates
        );

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
    } catch (error) {
        next(error);
    }
};

// DELETE TASK
const deleteTask = (req, res, next) => {
    try {
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
    } catch (error) {
        next(error);
    }
};

// FILTER BY STATUS
const getTasksByStatus = (req, res, next) => {
    try {
        const { status } = req.params;

        const matchedStatus = validStatuses.find(
            item => item.toLowerCase() === status.toLowerCase()
        );

        if (!matchedStatus) {
            return res.status(400).json({
                success: false,
                message: "Status must be Pending, In Progress, or Completed"
            });
        }

        const tasks = taskModel.getTasksByStatus(matchedStatus);

        res.status(200).json({
            success: true,
            count: tasks.length,
            data: tasks
        });
    } catch (error) {
        next(error);
    }
};

// FILTER BY PRIORITY
const getTasksByPriority = (req, res, next) => {
    try {
        const { priority } = req.params;

        const matchedPriority = validPriorities.find(
            item => item.toLowerCase() === priority.toLowerCase()
        );

        if (!matchedPriority) {
            return res.status(400).json({
                success: false,
                message: "Priority must be Low, Medium, or High"
            });
        }

        const tasks = taskModel.getTasksByPriority(matchedPriority);

        res.status(200).json({
            success: true,
            count: tasks.length,
            data: tasks
        });
    } catch (error) {
        next(error);
    }
};

// TASK SUMMARY
const getTaskSummary = (req, res, next) => {
    try {
        const summary = taskModel.getTaskSummary();

        res.status(200).json({
            success: true,
            data: summary
        });
    } catch (error) {
        next(error);
    }
};

// FILTER BY EMPLOYEE
const getTasksByEmployee = (req, res, next) => {
    try {
        const tasks = taskModel.getTasksByEmployee(req.params.name);

        res.status(200).json({
            success: true,
            count: tasks.length,
            data: tasks
        });
    } catch (error) {
        next(error);
    }
};

// OVERDUE TASKS
const getOverdueTasks = (req, res, next) => {
    try {
        const tasks = taskModel.getOverdueTasks();

        res.status(200).json({
            success: true,
            count: tasks.length,
            data: tasks
        });
    } catch (error) {
        next(error);
    }
};

// EXPORT ALL CONTROLLERS
module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    patchTask,
    deleteTask,
    getTasksByStatus,
    getTasksByPriority,
    getTaskSummary,
    getTasksByEmployee,
    getOverdueTasks
};
