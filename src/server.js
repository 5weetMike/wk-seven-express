const express = require("express");

const app = express();

app.use(express.json());

const fakeDB =[];

//GET ROUTE

app.get("/books/allbooks", (request, response) => {
        response.send({message: "success",fakeDB: fakeDB});
})
app.get("/books", (request, response) => {
const book = {
    title: "book1",
    author: "me",
    genre: "horror",
};
    response.send({message: "success", book: book});
});

//GET ALL THE BOOKS (i.e. fakeDB)

// app.get("/books/allbooks", (request, response) => {
//     response.send({message: "success",fakeDB: fakeDB});
// })

// POST ROUTE

app.post("/books",(request, response) => {
  fakeDB.push(request.body);

    response.send({message: `${request.body.title} has been added`});
});



//DELETE ROUTE


app.listen(5000, () => {
 console.log("server is listening on port 5000")
});
