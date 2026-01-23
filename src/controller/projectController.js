const Project = require('../models/Project')

async function findAll(req, res) {
    try {
        const project = await Project.find({ user: req.user._id })
        res.json(project)

    } catch (error) {
        res.status(500).json({ error: ' error fetch the project', details: error.message })
    }
}

async function findOne(req, res) {
    try {
        const foundProject = await Project.findOne({ _id: req.params.id, user: req.user._id })
        if (!foundProject) {
            return res.status(404).json({ message: ' Project not found!' })
        }
        res.status(201).json(foundProject)

    } catch (error) {
        res.status(500).json({ error: 'error finding the project', details: error.message })

    }
}



async function Create(req, res) {

    // check for req body 
    console.log('req.body:', req.body)

    try {
        req.body.user = req.user._id

        // create a new product
        const newProject = await Project.create(req.body)
        // res statuse and json 
        res.status(201).json(newProject)

    } catch (error) {
        // res status and cannot create th e product with details  
        res.status(500).json({ error: 'Failed to create project', details: error.message })
    }
}

async function Delete(req, res) {
    try {
        const project = await Project.findOneAndDelete({
            _id: req.params.id,
            user: req.user._id
        })
        if (!project) {
            return res.status(404).json({ message: "Unauthorized access or project does not exist" })
        }
        res.json(project)

    } catch (error) {
        res.status(500).json(error)
    }
}


async function Update(req, res) {
    try {
        const project = await Project.findOneAndUpdate({ _id: req.params.id, user: req.user._id }, req, body, { new: true, runValidators: true })
        if (!project) {
            return res.status(404).json({ message: " Project is not found or you are not authorized to do this" })
        }
        res.json(project)
    } catch (error) {
        res.status(500).json(error)
    }
}
module.exports = { findAll, findOne, Update, Create, Delete }