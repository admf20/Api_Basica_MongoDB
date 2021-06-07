const {Schema, model} = require('mongoose');

const BookSchema = new Schema({
    title:{
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    gender: String,
    author: String
}, {
    timestamps: true
});

module.exports = model('Books', BookSchema);