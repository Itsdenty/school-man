import dotenv from 'dotenv';
import database from '../models';
import permissions from '../../config/permission';

dotenv.config();

database.mongoose.connect(database.mongodbConfig.uri, database.mongodbConfig.options, (err) => {
  if (err) {
    console.log('Mongodb connection error', err);
    process.exit();
  } else {
    console.log('Mongodb connection successful');
    database.User
      .create({
        firstname: 'Abd-afeez',
        lastname: 'Abd-hamid',
        username: 'coding-muse',
        password: 'superduperpassword1234',
        email: 'dent4real@yahoo.com',
        role: '5dfa7295acd8b04876328ca1',
        phone_number: '08167558013',
        permissions: [permissions.GLOBAL]
      })
      .then((status) => {
        database.mongoose.connection.close();
        process.exit();
      })
      .catch((error) => {
        console.log(error);
        database.mongoose.connection.close();
        process.exit();
      });
  }
});
