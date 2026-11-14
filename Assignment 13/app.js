
// const express = require("express");
// const taskRoutes = require("./routes/taskRoutes");

// const app = express();

// app.use(express.json());

// // Temporary request checker
// app.use((req, res, next) => {
//     console.log("REQUEST:", req.method, req.originalUrl);
//     next();
// });

// app.use("/api/tasks", taskRoutes);

// module.exports = app;




const express = require("express");
const taskRoutes = require("./routes/taskRoutes");

const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(express.json());

// Request checker
app.use((req, res, next) => {
    console.log("REQUEST:", req.method, req.originalUrl);
    next();
});

// Task routes
app.use("/api/tasks", taskRoutes);

// 404 middleware
app.use(notFound);

// Central error handler
app.use(errorHandler);

module.exports = app;