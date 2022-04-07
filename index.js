const express = require("express");
const cors = require("cors");
const authMiddleware = require("./middlewares/authMiddleware");
const books = require("./data/books.json");

const app = express();
app.use(cors());

const PORT = 5000;

app.use("/", authMiddleware);

app.get("/books", (req, res) => {
  return res.send({ books });
});

app.get("/", (req, res) => {
  return res.json({
    status: "success",
    message: "Firebase auth with node test project",
  });
});

app.listen(PORT, () => console.log(`The server is running at PORT ${PORT}`));
