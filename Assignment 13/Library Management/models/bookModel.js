const books = require("../data/books");

// GET ALL BOOKS
const getAllBooks = () => {
    return books;
};

// GET BOOK BY ID
const getBookById = (id) => {
    return books.find(book => book.id === Number(id));
};

// ADD NEW BOOK
const addBook = (bookData) => {
    const nextId = Math.max(...books.map(book => book.id), 0) + 1;

    const newBook = {
        id: nextId,
        ...bookData
    };

    books.push(newBook);
    return newBook;
};

// UPDATE BOOK
const updateBook = (id, bookData) => {
    const book = getBookById(id);

    if (!book) return null;

    Object.assign(book, bookData);
    return book;
};

// DELETE BOOK
const deleteBook = (id) => {
    const index = books.findIndex(book => book.id === Number(id));

    if (index === -1) return null;

    return books.splice(index, 1)[0];
};

// SEARCH BOOKS BY TITLE
const searchBooks = (title) => {
    return books.filter(book =>
        book.title.toLowerCase().includes(title.toLowerCase())
    );
};

// GET AVAILABLE BOOKS
const getAvailableBooks = () => {
    return books.filter(book => book.available === true);
};

module.exports = {
    getAllBooks,
    getBookById,
    addBook,
    updateBook,
    deleteBook,
    searchBooks,
    getAvailableBooks
};