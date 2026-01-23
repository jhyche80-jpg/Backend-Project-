require('dotenv').config()
const express = require('express')
const app = express()
const connectDB = require('./src/config/connection')
const taskRouter = require('./src/routes/taskRouter')
const PORT = process.env.PORT
const authMiddleware = require('./src/utils/authMiddleware')
const helmet = require('helmet')

// routers 

const userRouter = require('./src/routes/userRoute')
const projectRouter = require('./src/routes/projectRoute')

// middleware 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(helmet())

// routes 
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next()
})

app.use('/api/users', userRouter)
app.use('/api/projects', authMiddleware, projectRouter)
app.use("/api", authMiddleware, taskRouter)

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

startServer()
