const mongoose = require('mongoose');
const BookingSchema = new mongoose.BookingSchema({
    movie: {
        type: mongoose.Types.ObjectId,
        ref: 'Movie',
        required: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    seatNumber: {
        type: Number,
        required: true
    }
})