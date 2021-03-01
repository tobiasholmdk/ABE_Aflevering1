const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Obs: role could change to roles array.
const userSchema = new Schema({
    username: String,
    password: String,
    firstname: String,
    lastname: String,
    role: String
}); 

const User = mongoose.model('User', userSchema);

User.createIndexes();

module.exports = User;