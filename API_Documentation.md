
# API Documentation for Task Manager Application

## Overview

This is a simple Task Manager API built with Node.js, Express, and MongoDB that allows users to perform CRUD operations on tasks, such as creating, reading, updating, deleting, and managing task statuses (completed or incomplete).

---

## Endpoints

### 1. Create a Task

- **Method**: `POST`
- **URL**: `/api/tasks`
- **Description**: Creates a new task.

#### Request Body:
```json
{
    "title": "Sample Task",
    "description": "This is a sample task description."
}
```

#### Response:
- **Success (201):**
```json
{
    "_id": "60c72b2f9af1b2b4e8c99e3f",
    "title": "Sample Task",
    "description": "This is a sample task description.",
    "completed": false,
    "createdAt": "2024-11-06T12:16:43.740Z",
    "updatedAt": "2024-11-06T12:16:43.740Z"
}
```

- **Error (400):**
```json
{
    "error": "Title and description are required"
}
```

---

### 2. Get All Tasks

- **Method**: `GET`
- **URL**: `/api/tasks`
- **Description**: Retrieves all tasks.

#### Response:
- **Success (200):**
```json
[
    {
        "_id": "60c72b2f9af1b2b4e8c99e3f",
        "title": "Sample Task",
        "description": "This is a sample task description.",
        "completed": false,
        "createdAt": "2024-11-06T12:16:43.740Z",
        "updatedAt": "2024-11-06T12:16:43.740Z"
    }
]
```

- **Error (500):**
```json
{
    "error": "Server error while fetching tasks"
}
```

---

### 3. Get a Task by ID

- **Method**: `GET`
- **URL**: `/api/tasks/:id`
- **Description**: Retrieves a task by its unique ID.

#### Response:
- **Success (200):**
```json
{
    "_id": "60c72b2f9af1b2b4e8c99e3f",
    "title": "Sample Task",
    "description": "This is a sample task description.",
    "completed": false,
    "createdAt": "2024-11-06T12:16:43.740Z",
    "updatedAt": "2024-11-06T12:16:43.740Z"
}
```

- **Error (404):**
```json
{
    "error": "Task not found"
}
```

- **Error (500):**
```json
{
    "error": "Server error while fetching task"
}
```

---

### 4. Update a Task by ID

- **Method**: `PUT`
- **URL**: `/api/tasks/:id`
- **Description**: Updates an existing task by its ID.

#### Request Body:
```json
{
    "title": "Updated Task Title",
    "description": "Updated task description"
}
```

#### Response:
- **Success (200):**
```json
{
    "_id": "60c72b2f9af1b2b4e8c99e3f",
    "title": "Updated Task Title",
    "description": "Updated task description",
    "completed": false,
    "createdAt": "2024-11-06T12:16:43.740Z",
    "updatedAt": "2024-11-06T13:16:43.740Z"
}
```

- **Error (400):**
```json
{
    "error": "Title and description are required"
}
```

- **Error (404):**
```json
{
    "error": "Task not found"
}
```

- **Error (500):**
```json
{
    "error": "Server error while updating task"
}
```

---

### 5. Delete a Task by ID

- **Method**: `DELETE`
- **URL**: `/api/tasks/:id`
- **Description**: Deletes a task by its ID.

#### Response:
- **Success (200):**
```json
{
    "message": "Task deleted successfully"
}
```

- **Error (404):**
```json
{
    "error": "Task not found"
}
```

- **Error (500):**
```json
{
    "error": "Server error while deleting task"
}
```

---

### 6. Mark Task as Completed/Incompleted

- **Method**: `PATCH`
- **URL**: `/api/tasks/:id/completed`
- **Description**: Allows you to mark a task as completed or incomplete.

#### Request Body:
```json
{
    "completed": true
}
```

- `completed` (required): A boolean value indicating the task's status (true for completed, false for incomplete).

#### Response:
- **Success (200):**
```json
{
    "_id": "60c72b2f9af1b2b4e8c99e3f",
    "title": "Updated Task Title",
    "description": "Updated task description",
    "completed": true,
    "createdAt": "2024-11-06T12:16:43.740Z",
    "updatedAt": "2024-11-06T13:16:43.740Z"
}
```

- **Error (400):**
```json
{
    "error": "Completed field must be true or false"
}
```

- **Error (404):**
```json
{
    "error": "Task not found"
}
```

- **Error (500):**
```json
{
    "error": "Server error while updating task status"
}
```

---

### 7. Filter Tasks by Status (Optional)

- **Method**: `GET`
- **URL**: `/api/tasks/status/true` or `/api/tasks/status/false`
- **Description**: Retrieves tasks based on their completed status.

#### Query Parameters:
- `completed`: A boolean value to filter tasks by their status (true for completed tasks, false for incomplete tasks).

#### Response:
- **Success (200):**
```json
[
    {
        "_id": "60c72b2f9af1b2b4e8c99e3f",
        "title": "Sample Task",
        "description": "This is a sample task description.",
        "completed": true,
        "createdAt": "2024-11-06T12:16:43.740Z",
        "updatedAt": "2024-11-06T12:16:43.740Z"
    }
]
```

- **Error (500):**
```json
{
    "error": "Server error while filtering tasks"
}
```

## Error Codes

- **400 Bad Request**: The request was malformed or missing required fields.
- **401 Unauthorized**: Authentication failed or user is not logged in.
- **403 Forbidden**: User does not have permission to access the resource.
- **404 Not Found**: Resource not found (e.g., task ID not found).
- **500 Internal Server Error**: A server-side error occurred.

---

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Ammar23255/Task_Manager_Project.git
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Create a `.env` file** in the root of the project:
   ```env
   MONGODB_URI=mongodb://localhost:27017/taskmanager
   ```

4. **Run the server**:
   ```bash
   npm run dev
   ```

5. **Test API Endpoints**:
   Use tools like Postman or Insomnia to test the API endpoints.

---

## Conclusion

This API provides a simple task management system with features like creating tasks, updating them, deleting tasks, marking them as completed, and filtering tasks based on their status. You can extend this API with additional features like user authentication and advanced filtering as needed.
