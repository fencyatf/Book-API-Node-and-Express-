  const express = require("express");
  const app = express();


  const books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { id: 3, title: "1984", author: "George Orwell", year: 1949 },
  ];


  app.get("/books", (req, res) => {
    res.json(books);
  });


  app.get("/books/:id", (req, res) => {
    const bookId = parseInt(req.params.id);
    const book = books.find((b) => b.id === bookId);

    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  });


  app.listen(4001, () => {
    console.log("Server is running on port 4001");
  });
