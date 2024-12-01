const asyncHandler = require("express-async-handler");
const Task = require("../models/task");

// CRUD Routes
// Create a task
const createTask = asyncHandler(async (req, res) => {
    const { title, description } = req.body;

    try {
        const newTask = new Task({ title, description });
        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all tasks
const getTasks = asyncHandler(async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a task by ID
const getTaskByID = asyncHandler(async (req, res) => {
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
const updateTask = asyncHandler(async (req, res) => {
    const { title, description } = req.body;
    const updates = {};
    if (title) updates.title = title;
    if (description) updates.description = description;

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
const completedCheck = asyncHandler(async (req, res) => {
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
const filtering = asyncHandler(async (req, res) => {
    const { completed } = req.params;

    const isCompleted = completed === 'true';

    try {
        const tasks = await Task.find({ completed: isCompleted });
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete a task by ID
const deleteTask = asyncHandler(async (req, res) => {
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

module.exports = {
    createTask,
    getTasks,
    getTaskByID,
    updateTask,
    completedCheck,
    filtering,
    deleteTask
};