/* Import modules */
const express = require("express");
const mongoose = require("mongoose");

/* Declare an "app" variable  for express */
const app = express();

/* Index Route */
app.get("/", (req, res) => res.send("Welcome to Express"));

/* Database configuration */
const db = require("./config/keys").mongoURI;

/* Connect to mongodb */
mongoose
  .connect(db)
  .then(() => console.log("Connected to database"))
  .catch(err => console.log(err));

/* Declare "dev" and "prod" port */
const port = process.env.PORT || 4000;

/* Create port listener */
app.listen(port, () => console.log(`Server running on ${port}`));
