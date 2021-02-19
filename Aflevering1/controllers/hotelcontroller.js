
var hotel = require ('../models/hotelmodel');
var room = require('../models/roommodel');

// Create an instance of model MyModel

/* POST add hotel form */
exports.addHotel =  async function (req, res) {
        var result = await hotel.create({Name: req.body.Name, Address: req.body.Address})
        res.status(200);
        res.json(result);
};

exports.addRoom =  async function (req, res) {
        var result = await hotel.findOneAndUpdate(req.body.Name, {Rooms: req.body.Name, Address: req.body.Address});
        res.status(200);
        res.json(result);
};

exports.getHotels = async function (req, res) {
        var result = await hotel.find()
        res.status(200);
        res.json(result);
}