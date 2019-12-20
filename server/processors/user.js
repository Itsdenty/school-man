/* eslint-disable no-underscore-dangle */
import database from '../database/models/index';

const { Role } = database,
  { User } = database;
/**
 * @description - Describes the Users of the app, their creation, their editing e.t.c.
 */
class userProcessor {
  /**
   * @description - Creates a new user in the app and assigns a token to them
   * @param{Object} user - api request
   * @param{Object} res - route response
   * @return{json} the registered user's detail
   */
  static async createUser(user) {
    try {
      // retrieve the user role
      const role = await Role.findOne({ name: 'student' });
      try {
        user.role = role._id;
        const newUser = await User.create(user);
        delete newUser.role;
        newUser.role = role.name;
        delete newUser.password;

        // return user object
        return {
          message: 'User created successfully',
          user: newUser
        };
      } catch (error) {
        console.log(error);
        // create and throw 500 error
        const err = { error: 'and error occured or user already exists' };
        throw err;
      }
    } catch (error) {
      // throw custom 500 error
      console.log(error);
      const err = { error: 'an error occured while trying to retrieve your records' };
      throw err;
    }
  }
}

export default userProcessor;
