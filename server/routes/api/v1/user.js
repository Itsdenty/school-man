import express from 'express';
import controller from '../../../controllers/user';
// import jwtVerify from '../../../middlewares/auth/jwt-verify';
import validator from '../../../middlewares/validators/user';


const router = express.Router();
router.post('/enroll', validator.create, controller.createUser);

export default router;
