import { StatusCodes } from "http-status-codes";

const successResponse = (res, message, data, statusCode = StatusCodes.OK) => {
    return res.status(statusCode).json({
        success: true,
        message,
        data,
    });
};

const errorResponse = (res, message, error, statusCode = StatusCodes.INTERNAL_SERVER_ERROR) => {
    return res.status(statusCode).json({
        success: false,
        message,
        error,
    });
};

export { successResponse, errorResponse };