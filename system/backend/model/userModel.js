const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    fname: { type: String, required: true },
    lname: { type: String, required: true },
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
userSchema.pre('save', async function(next) {
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
userSchema.methods.comparePassword = async function(candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};

module.exports = model('Admin', userSchema); // 'Admin' will be the name of the collection in the database
