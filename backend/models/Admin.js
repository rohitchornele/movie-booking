const mongoose = require('mongoose');
const AdminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
    },
    addedMovies: [{
        type: mongoose.Types.ObjectId,
        ref: 'Movie'
    }]
})