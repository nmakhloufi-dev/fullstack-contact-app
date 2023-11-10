const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.CONNECTION_URI, {
      dbName: "test",
    });
    console.log(
      "Database connected successfully :",
      connection.connection.host,
      connection.connection.name
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
