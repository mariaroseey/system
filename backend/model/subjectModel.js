const { Schema, model } = require('mongoose')

const subjectTable = Schema({
    code: {type: String, required: true},
    name: {type: String, required: true},
    units: {type: String, required: true},
   
    
})

module.exports = model ('subject_collections', subjectTable)