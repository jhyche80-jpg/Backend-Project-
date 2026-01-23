
const express = require('express')
const app = express()
const { startServer } = require('./src/utils/util')
const taskRouter = require('./src/routes/taskRouter')

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
app.use('/api/users', userRouter)
app.use('/api/projects', authMiddleware, projectRouter)
aoo.use("/api", authMiddleware, taskRouter)


app.get('/', (req, res) => {
    res.send('<h1>Hello friend!</h1>')

})
startServer()
