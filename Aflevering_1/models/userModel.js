const mongoose = require('mongoose'); const Schema = mongoose.Schema;
//Define a schema

const userSchema = new Schema({ 
    Email: String, 
    Password: String,
    IsAdmin: bool
});



const Student = mongoose.model( 'Student', StudentSchema, 'studentscollection');

Student.createIndexes();

module.exports = Student;