const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
const bodyParse = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

let isDBReady = false;
let isServerReady = false;
const uri = process.env.MONGODB_URI;

//settings
const port = process.env.PORT || 3001;
app.set("json spaces", 2);

//mongodb connect
mongoose.Promise = global.Promise;
mongoose.set("strictQuery", false);
mongoose
  .connect(uri)
  .then((db) => {
    console.log("mongoDB connection done!");
  })
  .catch((err) => {
    console.log("mongoDB connection fail!", err);
  });

//middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//routes
app.use(require("./routes/index"));

//start the server
app.listen(port, (err) => {
  if (err) {
    console.log("Server got error ", err);
  }
  console.log("server listening on port ", port);
});
