import Card from "../models/card.model.js";
import { successResponse, errorResponse } from "../utils/utils.response.js";
import { StatusCodes } from "http-status-codes";
import AppError from "../utils/app.error.js";

const createCard = async (req, res) => {
  const { title, description } = req.body;
  try {
    const card = await Card.create({ title, description });

    if (!card) {
      return next(new AppError(StatusCodes.BAD_GATEWAY, "Failed to create card"));
    }

    return successResponse(res, "Card created successfully", card, StatusCodes.CREATED);
  } catch (error) {
    return errorResponse(res, "An error occurred while creating the card", error.message);
  }
};

const getAllCards = async (req, res) => {
  try {
    const cards = await Card.find({});
    if (cards.length === 0) {
      return errorResponse(res, "No cards found", "No cards exist in the database", StatusCodes.NOT_FOUND);
    }

    return successResponse(res, "Cards fetched successfully", cards);
  } catch (error) {
    return errorResponse(res, "An error occurred while fetching the cards", error.message);
  }
};

const getCardsByTitle = async (req, res) => {
  const { title } = req.params;

  try {
    const cards = await Card.find({ title: { $regex: title, $options: 'i' } });
    if (cards.length === 0) {
      return errorResponse(res, "No cards found with the specified title", "No cards found with the specified title", StatusCodes.NOT_FOUND);
    }

    return successResponse(res, "Cards fetched successfully", cards);
  } catch (error) {
    return errorResponse(res, "An error occurred while fetching the cards", error.message);
  }
};

export {
  createCard,
  getAllCards,
  getCardsByTitle
};