const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;
var room = require ('./roommodel');

//Define a schema

const hotelSchema = new Schema({ 
    Name: String, 
    Address: String,
    Rooms: [room]
});

const Hotel = mongoose.model( 'Hotel', hotelSchema, 'hotelscollection');

Hotel.createIndexes();

module.exports = Hotel;