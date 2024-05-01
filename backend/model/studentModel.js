const { Schema, model } = require('mongoose')

const studentTable = Schema({
    id: {type: String, required: true},
    fname: {type: String, required: true},
    lname: {type: String, required: true},
    Address: {type: String, required: true},
    yearlevel: {type: String, required: true},
    course: {type: String, required: true},
    email: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
    
})

module.exports = model ('student_collections', studentTable)