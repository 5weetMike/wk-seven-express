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
};

//get function
const getAllBooks = async (request, response) => {
    const books = await Book.find({});
response.send({message: "success",books: books});
};

//get by title
const getByTitle = async (request,response) => {
    const author = await Book.findOneAndUpdate({title: request.body.title}, {author: request.body.author},{new: true});
    response.send({message: "author updated", author: author});
};

//delete on book by title
const deleteBookByTitle = async (request, response) => {
    const deleteBook = await Book.deleteOne({title: request.body.title});
    response.send({message: "Book deleted", deleteBook: deleteBook});
};

//find book by title
const bookByTitle = async (request, response) =>{
    const bookTitle = await Book.findOne({title: request.params.title});
    response.send({message: "Found book!", bookTitle: bookTitle});
};



module.exports = {
    addBook: addBook,
    getAllBooks: getAllBooks,
    getByTitle: getByTitle,
    deleteBookByTitle: deleteBookByTitle,
    bookByTitle: bookByTitle,
}