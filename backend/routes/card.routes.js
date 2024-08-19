import express from 'express';
import { createCard, getAllCards, getCardsByTitle } from '../controllers/card.controller.js';
import validateInput from '../middlewares/validate.middleware.js';

const router =  express.Router();

router.post('/', validateInput, createCard);
router.get('/',getAllCards);
router.get('/:title', getCardsByTitle);


export default router;