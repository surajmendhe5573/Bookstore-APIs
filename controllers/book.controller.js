const Book= require('../models/book.model');

const addBook= async(req, res)=>{
    try {
        const {title, author, price, description}= req.body;

        if(!title || !author || !price || !description){
            return res.status(400).json({message: 'All fields are required'});
        }

        const newBook= new Book({
            title,
            author,
            price, 
            description
        });

        await newBook.save();
        res.status(201).json({message: 'Book added successfully', book:newBook});
        
    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
    }
}

const getAllBooks= async(req, res)=>{
    try {
        const books= await Book.find();
        if(books.length==0){
            return res.status(404).json({message: 'No Books found'});
        }

        res.status(200).json({message: 'Books fetched succssfully', data:books})
        
    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
    }
}

const getBookById= async(req, res)=>{
    try {

        const {id}= req.params;

        const book= await Book.findById(id);
        if(!book){
            return res.status(404).json({message: 'Book not found'});
        }

        res.status(200).json({message: 'Book fetched succssfully', book});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal server error'});
    }
}

const updateBook= async(req, res)=>{
    try {
        const {title, author, price, description}= req.body;
        const {id}= req.params;

        const updates= {};

        if(title) updates.title= title;
        if(author) updates.author= author;
        if(price) updates.price= price;
        if(description) updates.description= description

        const updateBook= await Book.findByIdAndUpdate(id, updates, {new:true});
        if(!updateBook){
            return res.status(404).json({message: 'Book not found'});
        }

        res.status(200).json({message: 'Book updated successfully', updateBook});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal server error'});
    }
}

const deleteBook= async(req, res)=>{
    try {
        const {id}= req.params;

        const deleteBook= await Book.findByIdAndDelete(id);
        if(!deleteBook){
            return res.status(404).json({message: 'Book not found'});
        }

        res.status(200).json({message: 'Book deleted successfully'});
        
    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
    }
}

module.exports= {addBook, getAllBooks, getBookById, updateBook, deleteBook};