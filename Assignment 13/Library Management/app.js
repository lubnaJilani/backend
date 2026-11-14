const express = require("express");
const app = express();

const bookRoutes = require("./routes/bookRoutes");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

// MIDDLEWARE
app.use(express.json());

// ROUTES
app.use("/api/books", bookRoutes);

// ERROR HANDLING
app.use(notFound);
app.use(errorHandler);

module.exports = app;