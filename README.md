
# Task Manager Application

## Overview

This is a simple Task Manager API built with Node.js, Express, and MongoDB. It allows users to manage tasks by performing CRUD operations: Create, Read, Update, and Delete. Tasks can also be marked as completed or incomplete, and users can filter tasks based on their status. 

The application provides a RESTful API that can be used to interact with the task data.

---

## Features

- **Create tasks**: Add new tasks with a title and description.
- **Read tasks**: Get all tasks or a specific task by its ID.
- **Update tasks**: Modify the title or description of a task.
- **Delete tasks**: Remove a task from the system.
- **Task status**: Tasks can be marked as "completed" or "incomplete".
- **Filter tasks**: Filter tasks based on their completion status.

---

## Tech Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Environment Variables**: `dotenv` for sensitive information (e.g., MongoDB URI)

---

## Installation

Follow the steps below to set up the Task Manager API locally:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/task-manager.git
```

### 2. Install dependencies

Navigate to the project directory and run the following command to install the required dependencies:

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root of your project and add the following:

```plaintext
MONGODB_URI=your_mongo_connection_string
PORT=3001
```

Replace `your_mongo_connection_string` with your MongoDB connection URI.

### 4. Start the application

Run the following command to start the server:

```bash
npm start
```

The server will start on port `3001` by default.

---

## API Documentation

The Task Manager API follows RESTful principles. Below are the available endpoints:

### 1. Create a Task

- **POST** `/tasks`
- **Request Body**:
```json
{
    "title": "Task Title",
    "description": "Task Description"
}
```

### 2. Get All Tasks

- **GET** `/tasks`

### 3. Get a Task by ID

- **GET** `/tasks/:id`

### 4. Update a Task by ID

- **PUT** `/tasks/:id`
- **Request Body**:
```json
{
    "title": "Updated Task Title",
    "description": "Updated task description"
}
```

### 5. Delete a Task by ID

- **DELETE** `/tasks/:id`

For more details on the API, check the [API Documentation](./API_Documentation.md).

---

## Additional Information

- The application uses MongoDB to store task data.
- It automatically creates tasks with a `completed` field set to `false` by default.

---

## License

This project is licensed under the MIT License.

---

## Author

**Your Name**  
Ahmed Ammar: https://github.com/Ammar23255
