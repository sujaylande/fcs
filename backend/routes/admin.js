import express from 'express';
import { moveFromReadyToDelivered } from '../controllers/delivered.js';
import { moveFromWaitingToReady } from '../controllers/ready.js';

const router = express.Router();

router.route('/orderready').post(moveFromWaitingToReady);

router.route('/orderdelivered').post(moveFromReadyToDelivered);

export default router;