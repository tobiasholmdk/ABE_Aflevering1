const mongoose = require('mongoose'); const Schema = mongoose.Schema;
//Define a schema

const StudentSchema = new Schema({ 
    Name: String, 
    Grade: String,
});



const Student = mongoose.model( 'Student', StudentSchema, 'studentscollection');

Student.createIndexes();

module.exports = Student;