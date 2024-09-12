require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
//new code below added
const connection = require("./db/connection");
const  Book = require("./books/model");
const bookRouter = require("./books/routes")

const app = express();
app.use(express.json());

connection();

//needed for bookRouter to be used in server.js (e.i"app.use(___)")
app.use(bookRouter);


//Routes



//GET Route
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
