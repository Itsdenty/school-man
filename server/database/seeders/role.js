import dotenv from 'dotenv';
import database from '../models';
import permissions from '../../config/permission';

dotenv.config();

database.mongoose.connect(database.mongodbConfig.uri,
  database.mongodbConfig.options, (err) => {
    if (err) {
      console.log('Mongodb connection error', err);
      process.exit();
    } else {
      console.log('Mongodb connection successful');
      database.Role
        .insertMany([
          {
            name: 'management',
            display_name: 'Management',
            description: 'The role for The school senior staffs',
            permissions: [permissions.GLOBAL],
          },
          {
            name: 'admin',
            display_name: 'Admin',
            description: 'The role for admin with restricted access',
            permissions: [permissions.GLOBAL_USER]
          },
          {
            name: 'finance',
            display_name: 'Finance',
            description: 'The role for staff with staff permisions',
            permissions: [permissions.READ_STAFF, permissions.READ_ITEM, permissions.READ_SELF],
          },
          {
            name: 'general',
            display_name: 'General',
            description: 'The role for the staff with only self permission',
            permissions: [permissions.READ_SELF],
          },
          {
            name: 'contractor',
            display_name: 'Contractor',
            description: 'The role for the staff with special self and read staff permisions',
            permissions: [permissions.READ_SELF, permissions.READ_STAFF],
          },
          {
            name: 'general',
            display_name: 'General',
            description: 'The role for the staff with special sales permissions',
            permissions: [permissions.READ_SELF],
          },
          {
            name: 'teacher',
            display_name: 'Teacher',
            description: 'The role for the staff with special students/class permissions',
            permissions: [permissions.READ_SELF, permissions.READ_STUDENT,
              permissions.WRITE_CLASS, permissions.READ_CLASS],
          },
          {
            name: 'student',
            display_name: 'Student',
            description: 'The role for the students',
            permissions: [permissions.READ_SELF, permissions.WRITE_STUDENT,
              permissions.WRITE_CLASS],
          },
        ])
        .then((docs) => {
          console.log(docs);
          database.mongoose.connection.close();
          process.exit();
        })
        .catch((error) => {
          console.log(error.message);
          database.mongoose.connection.close();
          process.exit();
        });
    }
  });
