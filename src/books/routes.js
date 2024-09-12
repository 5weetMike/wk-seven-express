const {Router} = require("express");
const bookRouter = Router();
const {addBook} = require("./controllers");
const {getAllBooks} = require("./controllers");
const {getByTitle} = require("./controllers")
const {deleteBookByTitle} = require("./controllers")

//posts route  (replacing "app.___, with bookRouter.___" and moving the function code into controllers.js)
bookRouter.post("/books/addbook", addBook);

//GET Route
bookRouter.get("/books/getallbooks", getAllBooks);

//get by title
bookRouter.put("/books/bookauthor", getByTitle);

//Delete one book by title
bookRouter.delete("/books/deletebookbytitle", deleteBookByTitle);





module.exports = bookRouter;