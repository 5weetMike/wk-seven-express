const Book = require("./model");


//post function
const addBook = async (request, response) => {
    console.log("request.body: ", request.body.title)
const book = await Book.create({
   title: request.body.title,
   author: request.body.author,
   genre: request.body.genre,
});
    response.send({message: "success", book: book});
}
//get function
const getAllBooks = async (request, response) => {
    const books = await Book.find({});
response.send({message: "success",books: books});
}
//get by title
const getByTitle = async (request,response) => {
    const author = await Book.findOneAndUpdate({title: request.body.title}, {author: request.body.author},{after:true});
    response.send({message: "author updated", author: author});
}
//delete on book by title
const deleteBookByTitle = async (request, response) => {
    const deleteBook = await Book.deleteOne({title: request.body.title});
    response.send({message: "Book deleted", deleteBook: deleteBook});
}

module.exports = {
    addBook: addBook,
    getAllBooks: getAllBooks,
    getByTitle: getByTitle,
    deleteBookByTitle: deleteBookByTitle,
}