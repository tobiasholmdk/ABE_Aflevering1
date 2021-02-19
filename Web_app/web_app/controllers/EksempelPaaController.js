const students = [];

/* POST add student form */
exports.addStudent = function (req, res) {
    let student = {};
    student.name = req.body.name;
    student.grade = req.body.grade;
    students.push(student);
    res.status(200);
    res.json(student);
};

/* GET list of students */
exports.listStudents = function (req, res) {
    res.status(200);
    res.json(students);
};