const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRouter')

const PORT = process.env.PORT || 5000
const app = express()
app.use(express.json())
app.use('/auth', authRouter)

async function start(){
    try {
        await mongoose.connect('<your mongodb key>')
       app.listen(PORT, () => console.log(`Server started on port: ${PORT}`)) 
    } catch (error) {
        console.log(error)
    }
}

start()