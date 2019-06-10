const express = require("express");
const mongoose = require("mongoose");

const app = express();
mongoose.connect("mongodb://localhost:27017/blog", { useNewUrlParser: true });
mongoose.connection.on("connected", err => {
  if (err) throw err;
  console.log("Connected to database");
});

//Mongoose Schema
const PostSchema = mongoose.Schema({
  title: {
    type: "String",
    unique: false
  },
  content: String,
  author: String,
  timestamp: String
});

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Api routes
app.post("/api/post/new", (req, res) => {
  let payload = {
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    timestamp: new Date().getTime() * 1000
  };
});

//Start server
app.listen(process.env.PORT || 3000, err => {
  if (err) console.error(err);
  console.log("Server has started on port %s", 3000 || process.env.PORT);
});
