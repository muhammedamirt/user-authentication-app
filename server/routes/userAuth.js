// importing modules here
import Express from 'express'
import { checkTokenExpires, logoutUser, userLogin, userRegister } from '../controllers/userControllers.js'
// importing middleware for user authorization
import { requireAuth } from '../middleware/jwtAuth.js';
const router = Express.Router()

// user login router
router.post('/user-login',userLogin);
//user register router
router.post('/user-register',userRegister);
// check token expires or not in protected route
router.get('/check-token-expiration',requireAuth,checkTokenExpires); 
// route for user logout 
router.get('/user-logout',requireAuth,logoutUser);

// exporting router
export default router