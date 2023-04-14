import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import readXmlData from "../services/fileServices";
import ApiError from "../error/apiError";

class FileControllers {
  async getInf(req: Request, res: Response, next: NextFunction) {
    try {
      const dataJson = readXmlData();
      return res.json(dataJson.Db);
    } catch (e) {
      return next(new ApiError(StatusCodes.BAD_REQUEST, e.message));
    }
  }
}

export default new FileControllers();
