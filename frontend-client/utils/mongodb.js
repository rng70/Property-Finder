//import { connect } from 'http2';
const mongoose = require('mongoose');
// const MONGODB_URI="mongodb+srv://saadman:1705068@realestatefinder.v2e8p.mongodb.net/?retryWrites=true&w=majority"

const connection = {};
const connectDB = async () => {

    if (connection.isConnected) {
        return;
    }
    try {
        /**
             * mongodb version > 6 no longer required 
             * useNewUrlParser, useCreateIndex, useUnifiedTopology 
             * they are always TRUE
             * useFindAndModify which is by always FALSE
        */
        console.log("Mongo URI ", process.env.MONGODB_URI);
        console.log("Git ", process.env.GITHUB_SECRET)
        
        const db = await mongoose.connect(process.env.MONGODB_URI);

        connection.isConnected = db.connections[0].readState;

        console.log('MongoDB Connected inside nextjs...');
        console.log('express server at ', process.env.EXPRESS_API);
    } catch (err) {
        console.error(err.message);
        process.exit(1)
    }
}

module.exports = connectDB;