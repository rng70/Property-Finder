const config = require('config');
const db = config.get('MONGO_URI');
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    /**
         * mongodb version > 6 no longer required 
         * useNewUrlParser, useCreateIndex, useUnifiedTopology 
         * they are always TRUE
         * useFindAndModify which is by always FALSE
    */
    await mongoose.connect(db);

    console.log('MongoDB Connected...')
  } catch (err) {
    console.error(err.message);
    process.exit(1)
  }
}

module.exports = connectDB;