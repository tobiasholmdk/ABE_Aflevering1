var mongoose = require( 'mongoose' );

const url =
  "mongodb+srv://dbuser:Holmdk009@cluster0.qegoz.mongodb.net/Mongotest?retryWrites=true&w=majority";

  module.exports = async function main() {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
    } catch (error) {
console.log(error); 
}}

process.once('SIGUSR2', () => {
    gracefulShutdown('nodemon restart', () => {
  process.kill(process.pid, 'SIGUSR2'); });
  });

process.once('SIGUSR2', () => {
    gracefulShutdown('nodemon restart', () => {
  process.kill(process.pid, 'SIGUSR2'); });
  });

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}`);
  });
  mongoose.connection.on('error', err => {
    console.log('Mongoose connection error:', err);
  });
  mongoose.connection.on('disconnected', () => { console.log('Mongoose disconnected');
  });
  
const gracefulShutdown = (msg, callback) => {
    mongoose.connection.close( () => {
  console.log(`Mongoose disconnected through ${msg}`);
      callback();
    });
  };