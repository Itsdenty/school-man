/**
 * @swagger
 * securityDefinitions:
 *   Bearer:
 *     type: apiKey
 *     name: Authorization
 *     in: header
 * definition:
 *   User:
 *     properties:
 *       firstName:
 *         type: string
 *       lastName:
 *         type: string
 *       phoneNumber:
 *         type: string
 *       address:
 *         type: string
 *       email:
 *         type: string
 *         format: email
 *       role:
 *         type: number
 *       password:
 *         type: string
 *       created_at:
 *         type: string
 *       updated_at:
 *         type: string
 *   Login:
 *     properties:
 *       email:
 *         type: string
 *         format: email
 *       password:
 *         type: string
 *   LoginModel:
 *     properties:
 *       login:
 *         $ref: '#/definitions/Login'
 *   UserObject:
 *     properties:
 *       id:
 *         type: string
 *       firstName:
 *         type: string
 *       lastName:
 *         type: string
 *       username:
 *         type: string
 *       password:
 *         type: string
 *       phoneNumber:
 *         type: string
 *       address:
 *         type: string
 *       email:
 *         type: string
 *   UserResponse:
 *     properties:
 *       message:
 *         type: string
 *       user:
 *         $ref: '#/definitions/User'
 *   ResponseObjectSingle:
 *     properties:
 *       status:
 *         type: number
 *       data:
 *         $ref: '#/definitions/UserResponse'
 *   ResponseObjectLogout:
 *     properties:
 *       status:
 *         type: number
 *       data:
 *         type: object
 *         properties:
 *         message:
 *           type: string
 *   ErrorObject:
 *     properties:
 *       status:
 *         type: number
 *       error:
 *         type: string
 *   Token:
 *     properties:
 *       token:
 *         type: string
 */

/**
 * @swagger
 * /user/enroll:
 *   post:
 *     tags:
 *       - User
 *     description: Registers a new student
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user
 *         description: user signup credentials
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/UserModel'
 *     responses:
 *       200:
 *         description: Successfully created
 *         schema:
 *           $ref: '#/definitions/ResponseObjectSingle'
 *       400:
 *         description: You supplied and invalid user field
 *         schema:
 *           $ref: '#/definitions/ErrorObject'
 */

/**
 * @swagger
 * /user/login:
 *   post:
 *     tags:
 *       - User
 *     description: Log a user in
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: login
 *         description: User login credentials
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/LoginModel'
 *     responses:
 *       200:
 *         description: Successfully created
 *         schema:
 *           $ref: '#definitions/ResponseObjectSingle'
 *       400:
 *         description: An error occured
 *         schema:
 *           $ref: '#/definitions/ErrorObject'
 *       500:
 *         description: An error occured
 *         schema:
 *           $ref: '#/definitions/ErrorObject'
 */
