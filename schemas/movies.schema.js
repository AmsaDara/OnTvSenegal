const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const movieSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    year:{
        type: Date,
        default: Date.now,
    }
    
});


module.exports = mongoose.model('Movie', movieSchema);
