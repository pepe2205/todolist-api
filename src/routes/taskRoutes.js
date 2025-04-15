const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/taskController');
const authenticateToken = require('../middlewares/auth');

router.get('/', authenticateToken, TaskController.getAllTasks);
router.post('/', authenticateToken, TaskController.createTask);
router.put('/:id', authenticateToken, TaskController.updateTask);
router.delete('/:id', authenticateToken, TaskController.deleteTask);

module.exports = router; 