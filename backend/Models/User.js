const mongoose = require('mongoose')
const Schema = mongoose.Schema
//Define person Schema

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        required: true,
        type: String
    }
})

const UserModel = mongoose.model('Users', UserSchema);

module.exports = UserModel;