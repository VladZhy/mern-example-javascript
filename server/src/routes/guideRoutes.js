import { Router } from 'express';
import { createGuide } from '../controllers/guideController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = Router();

router.route('/create-guide').post(protect, createGuide);

export default router;
