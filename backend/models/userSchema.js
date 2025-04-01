const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    profilePic: {
        type: String,
        default: "https://iconarchive.com/download/i109569/Flat-Design/User-Profile-2-Avatar-User-Profile.ico"
    },
    orders: {
        type: Array,
        default: []
    },
    cart: {
        type: Array,
        default: []
    },
    wishlist: {
        type: Array,
        default: []
    }
});

module.exports = userSchema;