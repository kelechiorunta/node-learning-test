const mongoose = require('mongoose');
const validator = require('validator')
const bcrypt = require('bcrypt');


const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true, // Ensures usernames are unique
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6 // Set a minimum length for password security
    },
    email: { 
        type: String,
        lowercase: true, 
        required: true,
        unique: true, // Ensures each email is unique
        validate: {
            validator: validator.isEmail,
            message: 'Invalid email format'
        }
    },
    createdAt: {
        type: Date,
        default: Date.now // Automatically set `createdAt` on creation
    },
    updatedAt: {
        type: Date,
        default: Date.now // Automatically set `updatedAt` on creation and update
    },
    otherUsers: {
        type: Array,
        default: [] // Default to an empty array if not set
    },
    image: {
        type: String,
        default: '' // Store the image as a Base64 string or URL
    }
});
// Static method to get all users
UserSchema.statics.getUsers = function () {
    return this.find().exec(); // Using promises directly
};

// Pre-save mongoose middleware to hash the password and set timestamps
UserSchema.pre('save', async function (next) {
    // Hash password if modified
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }

    // Set timestamps
    const currentTime = Date.now();
    if (!this.createdAt) {
        this.createdAt = currentTime;
    }
    this.updatedAt = currentTime;

    // Populate `otherUsers` with all users except the current one
    try {
        const allUsers = await this.constructor.getUsers(); // Call static method on Model
        this.otherUsers = allUsers.filter(user => user.username.toString() !== this.username.toString())//.map(user => user._id);
    } catch (error) {
        console.error(error);
        return next(error);
    }

    next();
});



// Method to check if entered password matches the hashed password
UserSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

const UserModel = mongoose.model('UserModel', UserSchema);

module.exports = mongoose.models.UserModel || UserModel