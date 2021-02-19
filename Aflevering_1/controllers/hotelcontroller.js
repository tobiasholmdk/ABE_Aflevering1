
var hotel = require ('../models/hotelmodel');

// Create an instance of model MyModel

/* POST add hotel form */
exports.addHotel =  async function (req, res) {
        var result = await hotel.create({Name: req.body.name, Address: req.body.address})
        res.status(200);
        res.json(result);
};