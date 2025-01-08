const express= require('express');
const app= express();
require('dotenv').config();

const port= process.env.PORT || 3001

app.use(express.json());

app.get('/', (req, res)=>{
    res.send('Welcome to the Bookstore APIs');
})

require('./config/db');

app.use('/api', require('./routes/user'));
app.use('/api', require('./routes/book'));

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
})