const mongoose = require("mongoose");

const URI = process.env.URI;

mongoose
  .connect(URI)
  .then(() => console.log("Connected to Database"))
  .catch((error) => console.log("error.message"));
