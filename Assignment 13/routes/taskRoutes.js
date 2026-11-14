
const express = require("express");
const router = express.Router();

const taskController = require("../controllers/taskController");

router.get("/", taskController.getAllTasks);
router.get("/status/:status", taskController.getTasksByStatus);
router.get("/priority/:priority", taskController.getTasksByPriority);
router.get("/summary", taskController.getTaskSummary);
router.get("/employee/:name", taskController.getTasksByEmployee);
router.get("/overdue", taskController.getOverdueTasks);

router.get("/:id", taskController.getTaskById);
router.post("/", taskController.createTask);
router.put("/:id", taskController.updateTask);
router.patch("/:id", taskController.patchTask);

router.delete("/:id", taskController.deleteTask);

module.exports = router;
