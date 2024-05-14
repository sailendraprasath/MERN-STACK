// import express from "express";

// const router = express.Router();

// // Route to save new books
// router.post("/books", async (req, res) => {
//   try {
//     if (!req.body.title || !req.body.author || !req.body.publishYear) {
//       return res.status(400).send({
//         message: "Send all required fields: title, author, publishYear",
//       });
//     }
//     const newBook = {
//       title: req.body.title,
//       author: req.body.author,
//       publishYear: req.body.publishYear,
//     };
//     const book = await Book.create(newBook);
//     return res.status(201).send(book);
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).send({ message: error.message });
//   }
// });

// // Route to Get ALl books in DataBase
// router.get("/books", async (req, res) => {
//   try {
//     const book = await Book.find({});
//     return res.status(200).json({
//       count: book.length,
//       data: book,
//     });
//   } catch (error) {
//     console.log(Error.message);
//     res.status(500).send({ message: error.message });
//   }
// });

// // Route to Get one book in DataBase by ID
// router.get("/books/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const book = await Book.findById(id); // Corrected method name
//     if (!book) {
//       return res.status(404).json({ message: "Book not found" });
//     }
//     return res.status(200).json(book);
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).send({ message: error.message });
//   }
// });

// //Route for update a book
// router.put("/books/:id", async (req, res) => {
//   try {
//     if (!req.body.title || !req.body.author || !req.body.publishYear) {
//       return res.status(400).send({
//         message: "Send all required fields: title, author, publishYear",
//       });
//     }
//     const { id } = req.params;
//     const result = await Book.findByIdAndUpdate(id, req.body);
//     if (!result) {
//       return res.status(400).json({ message: "Book not found" });
//     }
//     return res.status(200).json({ message: "Book update Sucsessfully" });
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).send({ message: error.message });
//   }
// });

// //Route for a Delete a book
// router.delete("/books/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const result = await Book.findByIdAndDelete(id, req.body);
//     if (!result) {
//       return res.status(404).json({ message: "Book not found" });
//     }
//     return res.status(200).json({ message: "Book was Deleted Sucsessfully" });
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).send({ message: error.message });
//   }
// });

// export default rout
