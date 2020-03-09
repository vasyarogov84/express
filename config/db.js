const mongoose = require("mongoose");
require("colors");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
    console.log(`MongoDB connected: ${conn.connection.host}`.blue.bold);
  } catch (error) {
    console.log(`Something went wrong: ${error}`);
  }
};

module.exports = connectDB;
