const express = require("express");
const router = express.Router();
const {
    createTask,
    getTasks,
    getTaskByID,
    updateTask,
    completedCheck,
    filtering,
    deleteTask
} = require("../controller/taskController");

router.route("/tasks").post(createTask);
router.route("/tasks").get(getTasks);
router.route("/tasks/:id").get(getTaskByID);
router.route("/tasks/:id").put(updateTask);
router.route("/tasks/:id/completed").patch(completedCheck);
router.route("/tasks/status/:completed").get(filtering);
router.route("/tasks/:id").delete(deleteTask);

module.exports = router;
