/* Import modules */
const express = require("express");

/* Declare an "app" variable  for express */
const app = express();

/* Index Route */
app.get("/", (req, res) => res.send("Welcome to Express"));

/* Declare "dev" and "prod" port */
const port = process.env.PORT || 4000;

/* Create port listener */
app.listen(port, () => console.log(`Server running on ${port}`));
