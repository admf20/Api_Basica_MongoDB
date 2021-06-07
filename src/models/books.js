const {Schema, model} = require('mongoose');

const BookSchema = new Schema({
    title:{
        type: String,
        unique: true,
        required: true
    },
    description: String,
    gender: String,
    author: String
}, {
    timestamps: true
});

module.exports = model('Books', BookSchema);