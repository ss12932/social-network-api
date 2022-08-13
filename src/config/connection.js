require('dotenv').config();
const mongoose = require('mongoose');

const connectToDatabase = async () => {
  //wrapped in try/catch with async/await to handle connection errors. There's possibility of 1 of 2 errors that can occur with mongoose connection:
  // 1) error on initial connection. If it fails, mongoose will emit error event and promise connect() will reject. Mongoose will not automatically reconnect.
  // 2) error after initial connection was established, mongoose will attempt to reconnect, and will emit error event.
  try {
    const connectionString =
      process.env.MONGODB_URI ||
      `mongodb://127.0.0.1:27017/${process.env.MONGODB_NAME}`;

    const options = {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    };

    await mongoose.connect(connectionString, options);

    console.log(
      `Successfully connected to the database || ${process.env.MONGODB_NAME}`
    );
  } catch (err) {
    console.log(`Failed to connect to the database || ${err.message}`);
    throw new Error('Failed to connect to the database');
  }
};

module.exports = connectToDatabase;
