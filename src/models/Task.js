const { Schema, model } = require('mongoose')

const taskSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    project: {
        type: Schema.Types.ObjectId,
        ref: 'Project',
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String,
        enum: ['toDo', 'started', 'done'],
        default: 'toDo'
    }
}, { timestamps: true })

const Task = model('Task', taskSchema)

module.exports = Task