const express = require('express');
const router = express.Router();
const helper = require(__class_dir + '/helper.class.js');
const m$task = require(__module_dir + '/task.module.js');

router.post('/', async function (req, res, next) {
    const addTask = await m$task.add(req.body)
    helper.sendResponse(res, addTask);
});

router.get('/', async function (req, res, next) {
    const showTask = await m$task.show(req.body)
    helper.sendResponse(res, showTask);
});

router.put('/:id', async function (req, res, next) {
    const taskId = req.params.id;
    const updateTask = await m$task.update(taskId, req.body)
    helper.sendResponse(res, updateTask);
});

router.delete('/:id', async function (req, res, next) {
    const taskId = req.params.id;
    const deleteTask = await m$task.delete(taskId);
    helper.sendResponse(res, deleteTask);
});

module.exports = router;
