import transformer from '../utils/transformer';
import processor from '../processors/user'; // for user database interaction

/**
 *
 *
 * @class userController
 */
class userController {
  /**
   *
   *
   * @static
   * @param {*} req
   * @param {*} res
   * @memberof userController
   * @returns {json} createUser response
   */
  static async createUser(req, res) {
    try {
      const createUser = await processor.createUser(req.body);
      res.send(transformer.transformResponse(200, createUser));
    } catch (error) {
      res.status(500).json(transformer.transformResponse(500, error.error));
    }
  }
}
export default userController;
