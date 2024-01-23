import express from 'express';
import {
  logInUser,
  signUpUser,
  logOutUser,
  updateUserSettings,
} from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/sign-up', signUpUser);
router.post('/login', logInUser);
router.post('/logout', logOutUser);
router.route('/settings').put(protect, updateUserSettings);

export default router;
