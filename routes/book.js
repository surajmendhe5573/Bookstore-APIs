const express= require('express');
const { addBook, getAllBooks, getBookById, updateBook, deleteBook} = require('../controllers/book.controller');
const router= express.Router();
const authenticateToken= require('../middleware/auth.middleware');

router.post('/books', authenticateToken, addBook);
router.get('/books', getAllBooks);
router.get('/books/:id', getBookById);
router.put('/books/:id', authenticateToken, updateBook);
router.delete('/books/:id', authenticateToken, deleteBook);


module.exports= router;