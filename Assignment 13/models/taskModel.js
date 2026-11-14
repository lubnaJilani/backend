
const tasks = require("../data/tasks");

// GET ALL TASKS
const getAllTasks = () => {
    return tasks;
};

// GET TASK BY ID
const getTaskById = (id) => {
    return tasks.find(task => task.id === Number(id));
};

// CREATE TASK
const createTask = (taskData) => {
    const nextId = Math.max(...tasks.map(task => task.id), 0) + 1;

    const newTask = {
        ...taskData,
        id: nextId
    };

    tasks.push(newTask);

    return newTask;
};

// PATCH - UPDATE SELECTED FIELDS
const updateTask = (id, updatedData) => {
    const task = tasks.find(task => task.id === Number(id));

    if (!task) {
        return null;
    }

    Object.assign(task, updatedData);

    return task;
};

// PUT - REPLACE ENTIRE TASK
const replaceTask = (id, taskData) => {
    const index = tasks.findIndex(
        task => task.id === Number(id)
    );

    if (index === -1) {
        return null;
    }

    tasks[index] = {
        ...taskData,
        id: Number(id)
    };

    return tasks[index];
};

// DELETE TASK
const deleteTask = (id) => {
    const taskIndex = tasks.findIndex(
        task => task.id === Number(id)
    );

    if (taskIndex === -1) {
        return null;
    }

    return tasks.splice(taskIndex, 1)[0];
};

// FILTER BY STATUS
const getTasksByStatus = (status) => {
    return tasks.filter(
        task => task.status.toLowerCase() === status.toLowerCase()
    );
};

// FILTER BY PRIORITY
const getTasksByPriority = (priority) => {
    return tasks.filter(
        task => task.priority.toLowerCase() === priority.toLowerCase()
    );
};

// TASK SUMMARY
const getTaskSummary = () => {
    return {
        total: tasks.length,
        pending: tasks.filter(
            task => task.status === "Pending"
        ).length,
        inProgress: tasks.filter(
            task => task.status === "In Progress"
        ).length,
        completed: tasks.filter(
            task => task.status === "Completed"
        ).length
    };
};

// GET TASKS BY EMPLOYEE
const getTasksByEmployee = (name) => {
    return tasks.filter(
        task => task.assignedTo.toLowerCase() === name.toLowerCase()
    );
};

// GET OVERDUE TASKS
const getOverdueTasks = () => {
    const now = new Date();

    const today = [
        now.getFullYear(),
        String(now.getMonth() + 1).padStart(2, "0"),
        String(now.getDate()).padStart(2, "0")
    ].join("-");

    return tasks.filter(task =>
        task.dueDate < today &&
        task.status !== "Completed"
    );
};

// EXPORT ALL FUNCTIONS
module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    replaceTask,
    deleteTask,
    getTasksByStatus,
    getTasksByPriority,
    getTaskSummary,
    getTasksByEmployee,
    getOverdueTasks
};
