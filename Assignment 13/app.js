
const express = require("express");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

app.use(express.json());

// Temporary request checker
app.use((req, res, next) => {
    console.log("REQUEST:", req.method, req.originalUrl);
    next();
});

app.use("/api/tasks", taskRoutes);

module.exports = app;
