const express = require("express");
const router = express.Router();

const bookController = require("../controllers/bookController");

// SPECIFIC ROUTES FIRST
router.get("/search", bookController.searchBooks);
router.get("/available", bookController.getAvailableBooks);

// GENERAL ROUTES
router.get("/", bookController.getAllBooks);
router.get("/:id", bookController.getBookById);

router.post("/", bookController.addBook);
router.put("/:id", bookController.updateBook);
router.patch("/:id", bookController.patchBook);
router.delete("/:id", bookController.deleteBook);

module.exports = router;