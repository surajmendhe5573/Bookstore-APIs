const express= require('express');
const { addBook, getAllBooks, getBookById, updateBook, deleteBook, searchBook, filterBooks, fetchAllBooks} = require('../controllers/book.controller');
const router= express.Router();
const authenticateToken= require('../middleware/auth.middleware');

router.post('/books', authenticateToken, addBook);
router.get('/books', getAllBooks);
router.put('/books/:id', authenticateToken, updateBook);
router.delete('/books/:id', authenticateToken, deleteBook);

router.get('/books/search', searchBook)
router.get('/books/filter', filterBooks)
router.get('/books/:id', getBookById);

router.get('/booksPagin', fetchAllBooks)


module.exports= router;