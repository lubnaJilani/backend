const bookModel = require("../models/bookModel");

// GET ALL BOOKS
const getAllBooks = (req, res) => {
    const books = bookModel.getAllBooks();

    res.status(200).json({
        success: true,
        count: books.length,
        data: books
    });
};

// GET BOOK BY ID
const getBookById = (req, res) => {
    const book = bookModel.getBookById(req.params.id);

    if (!book) {
        return res.status(404).json({
            success: false,
            message: "Book not found"
        });
    }

    res.status(200).json({
        success: true,
        data: book
    });
};

// ADD NEW BOOK
const addBook = (req, res) => {
    const { title, author, category, publishedYear, available } = req.body;

    if (
        !title ||
        !author ||
        !category ||
        publishedYear === undefined ||
        typeof available !== "boolean"
    ) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });
    }

    if (
        typeof title !== "string" ||
        typeof author !== "string" ||
        typeof category !== "string" ||
        !Number.isInteger(Number(publishedYear)) ||
        Number(publishedYear) < 1
    ) {
        return res.status(400).json({
            success: false,
            message: "Please provide valid book details"
        });
    }

    const newBook = bookModel.addBook({
        title: title.trim(),
        author: author.trim(),
        category: category.trim(),
        publishedYear: Number(publishedYear),
        available
    });

    res.status(201).json({
        success: true,
        message: "Book added successfully",
        data: newBook
    });
};

// UPDATE BOOK (PUT)
const updateBook = (req, res) => {
    const { title, author, category, publishedYear, available } = req.body;

    if (
        !title ||
        !author ||
        !category ||
        publishedYear === undefined ||
        typeof available !== "boolean"
    ) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });
    }

    if (
        typeof title !== "string" ||
        typeof author !== "string" ||
        typeof category !== "string" ||
        !Number.isInteger(Number(publishedYear)) ||
        Number(publishedYear) < 1
    ) {
        return res.status(400).json({
            success: false,
            message: "Please provide valid book details"
        });
    }

    const updatedBook = bookModel.updateBook(req.params.id, {
        title: title.trim(),
        author: author.trim(),
        category: category.trim(),
        publishedYear: Number(publishedYear),
        available
    });

    if (!updatedBook) {
        return res.status(404).json({
            success: false,
            message: "Book not found"
        });
    }

    res.status(200).json({
        success: true,
        message: "Book updated successfully",
        data: updatedBook
    });
};

// PARTIALLY UPDATE BOOK (PATCH)
const patchBook = (req, res) => {
    const allowedFields = [
        "title",
        "author",
        "category",
        "publishedYear",
        "available"
    ];

    const updates = req.body;

    if (!updates || Object.keys(updates).length === 0) {
        return res.status(400).json({
            success: false,
            message: "Please provide at least one field to update"
        });
    }

    const invalidFields = Object.keys(updates).filter(
        field => !allowedFields.includes(field)
    );

    if (invalidFields.length > 0) {
        return res.status(400).json({
            success: false,
            message: "Invalid field provided"
        });
    }

    if (
        ("title" in updates && (typeof updates.title !== "string" || !updates.title.trim())) ||
        ("author" in updates && (typeof updates.author !== "string" || !updates.author.trim())) ||
        ("category" in updates && (typeof updates.category !== "string" || !updates.category.trim())) ||
        ("publishedYear" in updates && (!Number.isInteger(Number(updates.publishedYear)) || Number(updates.publishedYear) < 1)) ||
        ("available" in updates && typeof updates.available !== "boolean")
    ) {
        return res.status(400).json({
            success: false,
            message: "Invalid book details"
        });
    }

    if ("title" in updates) updates.title = updates.title.trim();
    if ("author" in updates) updates.author = updates.author.trim();
    if ("category" in updates) updates.category = updates.category.trim();
    if ("publishedYear" in updates) updates.publishedYear = Number(updates.publishedYear);

    const updatedBook = bookModel.updateBook(req.params.id, updates);

    if (!updatedBook) {
        return res.status(404).json({
            success: false,
            message: "Book not found"
        });
    }

    res.status(200).json({
        success: true,
        message: "Book partially updated successfully",
        data: updatedBook
    });
};

// DELETE BOOK
const deleteBook = (req, res) => {
    const deletedBook = bookModel.deleteBook(req.params.id);

    if (!deletedBook) {
        return res.status(404).json({
            success: false,
            message: "Book not found"
        });
    }

    res.status(200).json({
        success: true,
        message: "Book deleted successfully",
        data: deletedBook
    });
};

// SEARCH BOOKS BY TITLE
const searchBooks = (req, res) => {
    const { title } = req.query;

    if (!title || !title.trim()) {
        return res.status(400).json({
            success: false,
            message: "Please provide a title to search"
        });
    }

    const books = bookModel.searchBooks(title.trim());

    res.status(200).json({
        success: true,
        count: books.length,
        data: books
    });
};

// GET AVAILABLE BOOKS
const getAvailableBooks = (req, res) => {
    const books = bookModel.getAvailableBooks();

    res.status(200).json({
        success: true,
        count: books.length,
        data: books
    });
};

module.exports = {
    getAllBooks,
    getBookById,
    addBook,
    updateBook,
    patchBook,
    deleteBook,
    searchBooks,
    getAvailableBooks
};