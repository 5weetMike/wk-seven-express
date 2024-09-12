require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
//new code below added to  route the app
const connection = require("./db/connection");
const  Book = require("./books/model");
const bookRouter = require("./books/routes");
//const { getByTitle, deleteBookByTitle } = require("./books/controllers");

const app = express();
app.use(express.json());

connection();

//needed for bookRouter to be used in server.js (e.i"app.use(_")
app.use(bookRouter);



app.listen(5000, () => {
 console.log("server is listening on port 5000")
});
