import { StatusCodes } from "http-status-codes";
import { errorResponse } from "../utils/utils.response.js";

const validateInput = (req, res, next) => {
    const { title, description } = req.body;

    if (!title || !description) {
        return errorResponse(res, "All fields are required", null, StatusCodes.BAD_REQUEST);
    }

    next();
};

export default validateInput;