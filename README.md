# Bookstore API

## Overview
A RESTful API built with Node.js, Express.js, and MongoDB to manage books and user authentication. Features include user registration and login, book management (CRUD), search, filtering, and pagination.


## Features

### User Authentication
- **Register**: Create a new user with name, email, and password.
- **Login**: Authenticate a user and generate a JWT token for secured endpoints.

### Book Management
- **Add Book**: Add new books to the database. (Protected)
- **Get All Books**: Retrieve a list of all books.
- **Get Book by ID**: Fetch book details by ID.
- **Update Book**: Update book details by ID. (Protected)
- **Delete Book**: Delete a book by ID. (Protected)
- **Search Books**: Search for books by title.
- **Filter Books**: Filter books by author and price range.
- **Pagination**: Fetch books in a paginated manner.


## API Endpoints

### User Endpoints
| Method | Endpoint       | Description         | Protected |
|--------|----------------|---------------------|-----------|
| POST   | `/register`    | Register a new user | No        |
| POST   | `/login`       | Login a user        | No        |

### Book Endpoints
| Method | Endpoint               | Description                   | Protected |
|--------|-------------------------|-------------------------------|-----------|
| POST   | `/books`               | Add a new book                | Yes       |
| GET    | `/books`               | Retrieve all books            | No        |
| GET    | `/books/:id`           | Get book by ID                | No        |
| PUT    | `/books/:id`           | Update a book by ID           | Yes       |
| DELETE | `/books/:id`           | Delete a book by ID           | Yes       |
| GET    | `/books/search`        | Search books by title         | No        |
| GET    | `/books/filter`        | Filter books by author/price  | No        |
| GET    | `/booksPagin`          | Fetch paginated books         | No        |


## Tech Stack

- **Backend:** Node.js, Express.js
- **Databases:** MongoDB
- **Authentication:** JSON Web Tokens (JWT)


## Getting Started

### Prerequisites
- Node.js and npm installed
- MongoDB 


## Installation and Setup
- Clone the repository
```
git clone git clone https://github.com/surajmendhe5573/Bookstore-APIs.git

```
- Install dependencies
```
cd <Bookstore>
npm install
```
- Build and run the project
```
npm start
```

## Environment Variables

Create a `.env` file in the root directory of the project with the following variables:

```
# Port
PORT=5000

# Database Connection
MONGODB_URI=mongodb://localhost:27017/defaultdb

# JWT Secrets
JWT_SECRET=your_jwt_auth_secret


```

## 🚀 About Me
I'm a Backend developer...


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/surajmendhe5573)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/suraj-mendhe-569879233/?original_referer=https%3A%2F%2Fsearch%2Eyahoo%2Ecom%2F&originalSubdomain=in)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/)
