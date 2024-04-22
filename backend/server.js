// IMPORTS
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const main = require("./config/db");
const userRoutes = require("./routes/userRoutes");

//middlewares
const app = express();
app.use(express.json());
app.use(cors());
main(); //connecting to mongodb

app.use("/api/user", userRoutes);


// SERVER LISTENING

const PORT = 5000;
app.listen(PORT, () => {
  console.log("server started at port 5000");
});

