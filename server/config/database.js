import dotenv from 'dotenv';

dotenv.config();
const Database = {};
const Promise = require('bluebird');

Database.mongodb = {
  uri: process.env.MONGODB_URI || 'mongodb://itsdenty:0l0r30f3@ds159184.mlab.com:59184/rebuild-test',
  options: {
    native_parser: true,
    socketTimeoutMS: 0,
    keepAlive: true,
    reconnectTries: 20,
    poolSize: 5,
    useMongoClient: true,
    promiseLibrary: Promise,
  },
  optionsDeprecated: {
    db: {
      native_parser: true
    },
    server: {
      poolSize: 5,
      socketOptions: {
        keepAlive: 120 * 1000,
        socketTimeoutMS: 0,
        connectionTimeout: 0
      }
    },
  }
};

module.exports = Database;
