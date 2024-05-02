const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const studentSchema = new Schema({
    id: { type: String, required: true, unique: true }, // Assuming student ID should be unique
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    address: { type: String, required: true }, // Adjusted field name to lowercase
    yearLevel: { type: Number, required: true }, // Changed to Number type
    course: { type: String, required: true },
    status: { type: String, required: true, enum: ['regular', 'irregular'] }, // Added enum for status
    email: { 
        type: String, 
        required: true, 
        unique: true, // Ensure email is unique
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // Validate email format
    },
    username: { 
        type: String, 
        required: true, 
        unique: true // Ensure username is unique
    },
    password: { 
        type: String, 
        required: true, 
        minlength: 6 // Set minimum password length
    }
});

// Hash password before saving to database
studentSchema.pre('save', async function(next) {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, salt);
        this.password = hashedPassword;
        next();
    } catch (error) {
        next(error);
    }
});

// Method to compare passwords
studentSchema.methods.comparePassword = async function(candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};

module.exports = model('Student', studentSchema); // 'Student' will be the name of the collection in the database
