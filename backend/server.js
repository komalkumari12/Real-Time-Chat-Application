const express = require("express");
const app = express();
require("dotenv").config();
require("./connection");
app.use(express.json());
const userRouter = require("./router/user");

const port = process.env.PORT;

app.use("/api", userRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
