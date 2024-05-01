const { Schema, model } = require('mongoose') 

const userTable = Schema({
    fname: {type: String, required: true},
    lname: {type: String, required: true},
    email: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
    
})

module.exports = model ('admin_collections', userTable)