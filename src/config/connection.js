require('dotenv').config()
const mongoose = require('mongoose')
const uri = process.env.MONGODB_URL

async function connectDB() {
    try {
        await mongoose.connect(uri)
        console.log('connected to database')

    } catch (error) {
        console.error('Failiure to connect', error)
        process.exit(1)
    }
}
module.exports = connectDB