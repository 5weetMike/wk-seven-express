require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
//new code below added
const connection = require("./db/connection");
const  Book = require("./books/model");


const app = express();
app.use(express.json());

connection();





//Routes

//posts route
app.post("/books/addbook", async (request, response) => {
    console.log("request.body: ", request.body.title)
const book = await Book.create({
   title: request.body.title,
   author: request.body.author,
   genre: request.body.genre,
});
    response.send({message: "success", book: book});
});

//GET ROUTE
app.get("/books/getallbooks", async (request, response) => {
    const books = await Book.find({});
response.send({message: "success",allbooks: books});
});

//get by title
app.put("/books/bookauthor", async (request,response) => {
    const author = await Book.findOneAndUpdate({title: request.body.title}, {author: request.body.author});
    response.send({message: "author updated", author: author});
});

//Delete one book by title
app.delete("/books/deletebookbytitle", async (request, response) => {
    const deleteBook = await Book.deleteOne({bookName: request.body.bookName});
    response.send({message: "Book deleted", deleteBook: deleteBook});
});


//EXAMPLES

// app.get("/books/allbooks", (request, response) => {
//         response.send({message: "success"});
// })
// app.get("/books", (request, response) => {

//     response.send({message: "success"});
// });

// POST ROUTE

// app.post("/books",(request, response) => {
//     response.send({message: "success"});
// });



app.listen(5000, () => {
 console.log("server is listening on port 5000")
});
