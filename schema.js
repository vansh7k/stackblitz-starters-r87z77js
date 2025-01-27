const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 0,
        required: true
    }
});

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,

    },
    password: {
        type: String,
        required: true
    },
    roles: {
        type: [String],
        default: ['user'],

    },
    profile: {
        type: ProfileSchema,
        required: true
    },
    lastLogin: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true 
});


const User = mongoose.model('User', UserSchema);
module.exports = User;