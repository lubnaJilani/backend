# Library Management REST API

## Project Description
A RESTful API built using Node.js and Express.js with MVC architecture. It manages books using an in-memory JavaScript array.

## Technologies Used
- Node.js
- Express.js
- JavaScript
- dotenv
- Postman

## Project Structure
```text
Library Management/
├── controllers/
│   └── bookController.js
├── data/
│   └── books.js
├── middleware/
│   ├── errorHandler.js
│   └── notFound.js
├── models/
│   └── bookModel.js
├── routes/
│   └── bookRoutes.js
├── .env
├── .gitignore
├── app.js
├── server.js
└── README.md
```

## Installation

1. Install dependencies:

```bash
npm install
```

2. Configure `.env`:

```env
PORT=3001
```

3. Start the server:

```bash
node server.js
```

Server URL: `http://localhost:3001`

## Book Fields

| Field | Type |
|---|---|
| id | Number |
| title | String |
| author | String |
| category | String |
| publishedYear | Number |
| available | Boolean |

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/books` | Get all books |
| GET | `/api/books/:id` | Get book by ID |
| POST | `/api/books` | Add a book |
| PUT | `/api/books/:id` | Replace book details |
| PATCH | `/api/books/:id` | Update selected fields |
| DELETE | `/api/books/:id` | Delete a book |
| GET | `/api/books/search?title=Node` | Search by title |
| GET | `/api/books/available` | Get available books |

## Features
- Create, read, update and delete books.
- Search books by title.
- Filter available books.
- Validate required fields and input values.
- Handle missing books and unknown routes.
- Centralized error handling.
- MVC architecture.

## Testing
All required endpoints were tested using Postman.

Tested response codes:
- 200 OK
- 201 Created
- 400 Bad Request
- 404 Not Found

## Data Storage
Books are stored in an in-memory JavaScript array. Data resets when the server restarts.

## Author
Library Management REST API Project
