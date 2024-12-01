const express = require('express');
const dotenv = require('dotenv');
const taskRoutes = require("./routes/taskRoutes");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.use('/api', taskRoutes);

module.exports = app;
