const mongoose = require("mongoose");
const validator = require("validator");

const movieSchema = new mongoose.Schema({
    name: { // To Easily Find a Movie
        type: String,
        required: true,
        unique: true
    },
    genre: {
        type: String,
        required: true
    },
    duration: {
        type: String, //Number
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price:{
        type: String, // Number
        required: true
    },
    showTime: {
        type: String,
        required: true
    }
})

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;