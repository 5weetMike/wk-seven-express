const {Router} = require("express");
const bookRouter = Router();
const  Book = require("./model");

//posts route  (replacing "app.___, with bookRouter.___")
bookRouter.post("/books/addbook", async (request, response) => {
    console.log("request.body: ", request.body.title)
const book = await Book.create({
   title: request.body.title,
   author: request.body.author,
   genre: request.body.genre,
});
    response.send({message: "success", book: book});
});



module.exports = bookRouter;