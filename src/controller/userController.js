require('dotenv').config()
const User = require('../models/User')
const { verification } = require('../utils/util')

async function Register(req, res) {
    try {
        // validate 
        const { email, username, password } = req.body
        if (!email | !password | !username) {
            res.status(400).json({ message: " Fill out all fields" })
        }
        // check for the exisiting user 
        const existingUser = await User.findOne({ email })
        const existingName = await User.findOne({ username })
        if (existingUser) {
            return res.status(400).json({ message: "User already exist" })
        }
        if (existingName) {
            return res.status(400).json({ message: ' User already exist' })
        }

        const newUser = await User.create({ username, password, email })
        return res.status(201).json(newUser)
    } catch (error) {
        console.error("Problem creating user", error)
        return res.status(500).json({ message: 'Server Error', details: error.message })
    }

}
async function Login(req, res) {
    const secret = process.env.JWT_SECRET
    const expiration = '2h'
    try {
        const { email, password } = req.body
        const verify = (email && password)
        const message = "incorrect infromation entered!"
        verification(verify, res, message)
        const user = await User.findOne({ email })
        const correctPassword = await user.isCorrectPassword(password)
        verification(correctPassword, res, message)
        const payload = {
            user: {
                _id: user._id,
                email: user.email,
                username: user.username
            }
        }
        const token = jwt.sign({ data: payload }, secret, { expiresIn: expiration })
        res.json({ token, user })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'server error' })
    }
}
module.exports = { Register, Login }