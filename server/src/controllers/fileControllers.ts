import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import fs from "fs";
import parser from "xml2json";
import path from "path";
import ApiError from "../error/apiError";

class FileControllers {
  async getInf(req: Request, res: Response, next: NextFunction) {
    try {
      const filePath = path.join(__dirname, "../../", "data/FoodProducts.xml");
      const xmlFile = fs.readFileSync(filePath, "utf8");
      const obj = parser.toJson(xmlFile, { object: true });
      return res.json(obj.Db);
    } catch (e) {
      return next(new ApiError(StatusCodes.BAD_REQUEST, e.message));
    }
  }
}

export default new FileControllers();
