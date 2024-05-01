const express = require('express');
require('dotenv').config()
const mongoose = require('mongoose')
const userModel = require('./model/userModel')
const studentModel = require('./model/studentModel')
const subjectModel = require('./model/subjectModel')

const app = express();

app.get('/home', (req, res)=>{
    res.json({ mssg: "connected"})
})

mongoose.connect(process.env.MONGO_DB)
.then(()=>{
    app.listen(process.env.PORT, ()=> {
        console.log('server start')
    })
})
.catch((error)=> {
    console.log(error)
})