const { Schema, model } = require('mongoose');

const subjectSchema = new Schema({
    code: { 
        type: String, 
        required: true, 
        unique: true // Ensure subject code is unique
    },
    name: { 
        type: String, 
        required: true 
    },
    units: { 
        type: Number, 
        required: true,
        min: 1 // Ensure units is a positive number
    }
});

module.exports = model('Subject', subjectSchema); // 'Subject' will be the name of the collection in the database
