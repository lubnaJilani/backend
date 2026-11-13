
const tasks = require("../data/tasks");

const getAllTasks = () => {
    return tasks;
};

const getTaskById = (id) => {
    return tasks.find(task => task.id === Number(id));
};

// Create a new task
const createTask = (taskData) => {
    const nextId = Math.max(...tasks.map(task => task.id), 0) + 1;

    const newTask = {
        ...taskData,
        id: nextId
    };

    tasks.push(newTask);

    return newTask;
};

// Update an existing task
const updateTask = (id, updatedData) => {
    const task = tasks.find(task => task.id === Number(id));

    if (!task) {
        return null;
    }

    Object.assign(task, updatedData);

    return task;
};



const deleteTask = (id) => {
    const taskIndex = tasks.findIndex(
        task => task.id === Number(id)
    );

    if (taskIndex === -1) {
        return null;
    }

    return tasks.splice(taskIndex, 1)[0];
}; 

const getTasksByStatus = (status) => {
    return tasks.filter(
        task => task.status.toLowerCase() === status.toLowerCase()
    );
};
const getTasksByPriority = (priority) => {
    return tasks.filter(
        task => task.priority.toLowerCase() === priority.toLowerCase()
    );
};

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


module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
    getTasksByStatus,
    getTasksByPriority,
    getTaskSummary
};