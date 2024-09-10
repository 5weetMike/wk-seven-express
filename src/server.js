require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

console.log(process.env.MY_WORD);

//DB connection

const connection = async () => {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB is working")
}

connection();

//Book model

const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true,        
    },
    author:{
        type: String,
        required: true,
    },
    genre:{
        type: String,
    },
});

const Book = mongoose.model("book", bookSchema);

//Routes

//posts
app.post("/books/addbook", async (request, response) => {
    console.log("request.body: ", request.body.title)
const book = await Book.create({
   title: request.body.title,
   author: request.body.author,
   genre: request.genre,
});

    response.send({message: "success", book: book});
});



//GET ROUTE

app.get("/books/allbooks", (request, response) => {
        response.send({message: "success"});
})
app.get("/books", (request, response) => {

    response.send({message: "success"});
});

// POST ROUTE

// app.post("/books",(request, response) => {
//     response.send({message: "success"});
// });



app.listen(5000, () => {
 console.log("server is listening on port 5000")
});
