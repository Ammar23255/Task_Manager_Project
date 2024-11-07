const mongoose = require('mongoose');

// Define the task schema
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false, // Field to track task completion status
    },
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
});

// Create the Task model
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
