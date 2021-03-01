
var hotel = require ('../models/hotelmodel');
var room = require('../models/roommodel');

// Create an instance of model MyModel

/* POST add hotel form */
exports.addHotel =  async function (req, res) {
        const hoteltest = {
                Name: req.body.Name,
                Address: req.body.Address
              };
        
        var result = await hotel.create(hoteltest);
        res.status(200);
        res.json(result);
};

exports.addRoom =  async function (req, res) {
        var doc = await hotel.findOne({Name: req.body.Name});
        var newRoom = {
                RoomNumber: req.body.RoomsNumber,
                Beds: req.body.Beds,
                Reserved : req.body.Reserved
        }
        doc.Rooms.push(newRoom);
        var result = await doc.save();
        res.status(200);
        res.json(result);
};

exports.getHotels = async function (req, res) {
        var result = await hotel.find()
        res.status(200);
        res.json(result);
}

exports.getFreeRooms = async function (req, res) {
        var resultHotel = await hotel.findOne({Name: req.body.Name});
        var freeRooms = resultHotel.Rooms.filter(function (room) {
                return room.Reserved ===false; });
        res.status(200);
        res.json(freeRooms);
}

