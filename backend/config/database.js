const mongoose = require("mongoose");

const connectToDB = () => {
  mongoose.connect(process.env.MONOGO_URL)
    .then((conn) => {
      console.log(`Database conntected: ${conn.connection.host}`);
    })
    .catch((error) => {
      console.log(`Error in connecting in  database ${error.message}`);
      process.exit(1);
    });
}

module.exports = connectToDB;