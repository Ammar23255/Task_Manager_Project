// app.js

// Importing required packages
const express = require('express');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Create an instance of an Express app
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Simple test route
app.get('/', (req, res) => {
    res.send('Welcome to the Task Manager API');
});

module.exports = app;

