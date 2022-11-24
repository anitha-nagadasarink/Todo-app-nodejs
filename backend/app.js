require("dotenv").config();
const connectToDB = require("./config/database");
const todoRoutes = require("./routes/todoRoutes");
const express = require("express");
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectToDB();
app.use("/", todoRoutes)

module.exports = app;
