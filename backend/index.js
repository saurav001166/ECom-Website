require('dotenv').config();
const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const { connectDb } = require("./connection");
const routes = require("./routes");

connectDb();

app.use(
  cors({
    origin: "http://localhost:5173",  
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

// Routes are prefixed with /api
app.use("/api", routes);

app.listen(port, () => console.log(`Server is running on port ${port}`));
