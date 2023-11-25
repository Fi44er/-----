require("dotenv").config()
const express = require('express')
const cors = require("cors")
const cookieParser = require("cookie-parser")
const router = require('./router/index')
const connection = require('./database/db')
const errorMiddlware = require('./middlewares/middlewaresError')
const multer = require('multer')

const PORT = process.env.PORT || 5000
const app = express()


app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}))
app.use('/api', router)
app.use(errorMiddlware)

 
const start = async () => {
    try{
        (await connection).connect
        app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`))
    }catch (e){
        console.log(e);
    }
}

start()