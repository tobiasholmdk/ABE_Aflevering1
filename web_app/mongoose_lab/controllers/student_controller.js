
var student = require ('../models/studentmodel');



// Create an instance of model MyModel


/* POST add student form */
exports.addStudent =  async function (req, res) {
        var result = await student.create({name: req.body.name, grade: req.body.grade})
        res.status(200);
        res.json(result);

};