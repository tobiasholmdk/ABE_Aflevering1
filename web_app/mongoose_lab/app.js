const mongoose = require('mongoose');
const Student = require('./models/studentmodel');
const students = require('./students');

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${url}`);
});
mongoose.connection.on('error', err => {
    console.log('Mongoose connection error:', err);
});
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

const url = 'mongodb+srv://dbuser:Holmdk009@cluster0.qegoz.mongodb.net/Mongotest?retryWrites=true&w=majority';

async function main() {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
    } catch (error) {
        console.log(error);
    }

    const db = mongoose.connection;

    try {
        let savedDocument = await Student.create(students);
        console.log(savedDocument);
    } catch (error) {
        console.log(error);
    } finally {
        // Ensures that the client will close when you finish/error
        await db.close();
    }
}

main();
