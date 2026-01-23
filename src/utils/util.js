require('dotenv').config()

const PORT = process.env.PORT
const connectDB = require('../config/connection')

async function startServer() {
    try {
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