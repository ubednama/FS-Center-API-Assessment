import express from 'express';
import cardRoutes from './card.routes.js';

const router =  express.Router();

router.use('/data', cardRoutes);


export default router;