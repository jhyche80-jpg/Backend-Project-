const Task = require('../models/Task')



async function findAll(req, res) {
    try {
        const filter = {}
        if (req.query.projectId) filter.project = req.query.projectId

        const tasks = await Task.find(filter)
            .populate('user', 'username email')
            .populate('project', 'name description')

        res.status(200).json({ success: true, tasks })
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching tasks', details: error.message })
    }
}


async function findOne(req, res) {
    try {
        const foundTask = await Task.findOne({ _id: req.params.taskId, user: req.user._id })
            .populate('user', 'username email')
            .populate('project', 'name description')

        if (!foundTask) {
            return res.status(404).json({ success: false, message: 'Task not found' })
        }

        res.status(200).json({ success: true, task: foundTask })
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error finding task', details: error.message })
    }
}


async function Create(req, res) {
    try {
        const { projectId } = req.params
        const { title, description, status } = req.body
        const userId = req.user._id

        if (!title || !description) {
            return res.status(400).json({ success: false, message: 'Title and description are required' })
        }

        const task = new Task({
            user: userId,
            project: projectId,
            title,
            description,
            status: status || 'toDo'
        })

        await task.save()
        await task.populate('user', 'username email').populate('project', 'name description')

        res.status(201).json({ success: true, task })
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to create task', details: error.message })
    }
}

async function Delete(req, res) {
    try {
        const task = await Task.findOneAndDelete({
            _id: req.params.taskId,
            user: req.user._id
        })
        if (!task) {
            return res.status(404).json({ message: "Unauthorized access or product does not exist" })
        }
        await task.populate('user', 'username email')
            .populate('project', 'name description')
        res.json({ sussess: true, task })

    } catch (error) {
        res.status(500).json(error)
    }
}


async function Update(req, res) {
    try {
        const task = await Task.findOneAndUpdate({
            _id: req.params.taskId,
            user: req.user._id
        }, req.body, { new: true, runValidators: true })
        if (!task) {
            return res.status(404).json({ success: false, message: " Task is not found or you are not authorized to do this" })
        }
        await task.populate('user', 'username email')
            .populate('project', 'name description')
        res.json({ success: true, task })
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to update task', details: error.message })
    }
}
module.exports = { findAll, findOne, Update, Create, Delete }