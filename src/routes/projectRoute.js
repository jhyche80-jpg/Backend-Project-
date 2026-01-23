const express = require('express')
const router = express.Router()
const { findAll, findOne, Update, Create, Delete } = require('../controller/projectController')
const taskRouter = require('../routes/taskRouter')

router.use("/", taskRouter)

// find all
router.get('/', findAll)
// find one 
router.get('/:id', findOne)
// update a product
router.put('/:id', Update)
// create a product 
router.post('/', Create)
// delete a product 
router.delete('/:id', Delete)

module.exports = router