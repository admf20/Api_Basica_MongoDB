const {model, Schema} = require('mongoose');

const UserChema = new Schema({
    name: String,
    username: {
        type: String,
        unique: true,
        require: true,
        trim: true
    },
    password: {
        type: String,
        unique: true,
        require: true,
        trim: true
    }
}, {
    timestamps: true
});

module.exports = model('Users', UserChema)