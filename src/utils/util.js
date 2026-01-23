require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT
const connectDB = require('../config/connection')

async function startServer() {
    try {
        app.get('/', (req, res) => {
            res.send('<h1>Hello friend!</h1>')

        })
        await connectDB()
        app.listen(PORT, () => {
            console.log(`Server is running http://localhost:${PORT}`)
            console.log(`Server is running http://localhost:${PORT}/api/projects`)
            console.log(`Server is running http://localhost:${PORT}/api/users`)
        })
    } catch (error) {
        console.error('Problem:', error)
        process.exit(1)
    }
}
function verification(term, res, errorMessage) {
    if (!term) {
        return res.status(400).json({ error: errorMessage })
    }
}
module.exports = { startServer, verification }