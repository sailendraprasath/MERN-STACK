import express, { response } from "express";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 5555;
const mongoDBURL = `mongodb+srv://user2000:test234@cluster0.xmurclo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Define book schema
const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String, // Changed 'string' to 'String'
      required: true,
    },
    publishYear: {
      // Changed 'PublishYear' to 'publishYear' for consistency
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true, // Changed 'Timestamps' to 'timestamps' for correct option name
  }
);

// Define book model
const Book = mongoose.model("Book", bookSchema); // Changed model name from "cat" to "Book"

// middle ware Handling CORS policy
// option1: Allows All Origin Default of CORS
// app.use(cors());
// option2 Allows All Origin Default of CORS
// app.use(
//   cors({
//     origin: "http://localhost:5173/",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["content-type"],
//   })
// );

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome to MERN stack developer sailesh");
});

// Route to save new books
app.post("/books", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message: "Send all required fields: title, author, publishYear",
      });
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };
    const book = await Book.create(newBook);
    return res.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Route to Get ALl books in DataBase
app.get("/books", async (req, res) => {
  try {
    const book = await Book.find({});
    return res.status(200).json({
      count: book.length,
      data: book,
    });
  } catch (error) {
    console.log(Error.message);
    res.status(500).send({ message: error.message });
  }
});

// Route to Get one book in DataBase by ID
app.get("/books/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id); // Corrected method name
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    return res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//Route for update a book
app.put("/books/:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message: "Send all required fields: title, author, publishYear",
      });
    }
    const { id } = req.params;
    const result = await Book.findByIdAndUpdate(id, req.body);
    if (!result) {
      return res.status(400).json({ message: "Book not found" });
    }
    return res.status(200).json({ message: "Book update Sucsessfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//Route for a Delete a book
app.delete("/books/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Book.findByIdAndDelete(id, req.body);
    if (!result) {
      return res.status(404).json({ message: "Book not found" });
    }
    return res.status(200).json({ message: "Book was Deleted Sucsessfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to PORT: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
