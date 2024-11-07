const express = require('express');
const mongoose = require('mongoose');
const Task = require('./models/task');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware to parse JSON
app.use(express.json());

// Default route (root route)
app.get('/', (req, res) => {
    res.send('Welcome to the Task Manager API!');
});

// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1); // Exit the app if DB connection fails
    }
};

// Call connectDB function
connectDB();

// CRUD Routes
// Create a task
app.post('/tasks', async (req, res) => {
    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(400).json({ error: 'Title and description are required' });
    }

    try {
        const task = new Task({ title, description });
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all tasks
app.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a task by ID
app.get('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a task by ID
app.put('/tasks/:id', async (req, res) => {
    const { title, description, completed } = req.body;
    const updates = {};
    if (title) updates.title = title;
    if (description) updates.description = description;
    if (typeof completed === 'boolean') updates.completed = completed;

    try {
        const task = await Task.findByIdAndUpdate(
            req.params.id,
            updates,
            { new: true, runValidators: true }
        );

        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Mark a task as completed or incomplete by ID
app.patch('/tasks/:id/completed', async (req, res) => {
    const { completed } = req.body;

    if (typeof completed !== 'boolean') {
        return res.status(400).json({ error: 'Completed status must be a boolean' });
    }

    try {
        const task = await Task.findByIdAndUpdate(
            req.params.id,
            { completed },
            { new: true, runValidators: true }
        );

        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Filter tasks by completion status
app.get('/tasks/status/:completed', async (req, res) => {
    const { completed } = req.params;

    // Convert completed parameter to boolean
    const isCompleted = completed === 'true';

    try {
        const tasks = await Task.find({ completed: isCompleted });
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete a task by ID
app.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
