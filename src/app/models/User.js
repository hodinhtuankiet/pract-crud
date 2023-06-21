const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        maxLength: 60,
        require: true,
        minLength: 6,
        unique: true,
    },
    email: {
        type: String,
        maxLength: 60,
        require: true,
        minLength: 10,
        unique: true,
    },
    password: {
        type: String,
        maxLength: 60,
        minLength: 8,
        require: true,
    },
    admin: {
        type: Boolean,
        default: false,
    }

}, {
    timestamps: true
});
module.exports = mongoose.model('User', userSchema); 