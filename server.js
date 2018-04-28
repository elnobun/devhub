/* Import modules */
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

/* Declare variables for routes */
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

/* Declare an "app" variable  for express */
const app = express();

/* Body Parser middleware */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* Database configuration */
const db = require("./config/keys").mongoURI;

/* Connect to mongodb */
mongoose
  .connect(db)
  .then(() => console.log("Connected to database"))
  .catch(err => console.log(err));

/* Index Route */
app.get("/", (req, res) => res.send("Welcome to Express"));

/* Use Routes */
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

/* Declare "dev" and "prod" port */
const port = process.env.PORT || 4000;

/* Create port listener */
app.listen(port, () => console.log(`Server running on ${port}`));
