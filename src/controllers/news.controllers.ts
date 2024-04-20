import { NextFunction, Request, Response } from "express";
import * as service from "../services/news.services";
import { HttpResponse } from "../utils/http.response";
const httpResponse = new HttpResponse();

export const create = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newItem = await service.create({
            ...req.body,
            date: new Date().toLocaleDateString()
        });
        if (!newItem) return httpResponse.NotFound(res, "Validation error!");
        else return httpResponse.Ok(res, newItem);
    } catch (error: unknown) {
        next((error as Error).message);
    }
};

export const getAll = async (
  _req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | undefined> => {
  try {
    const news = await service.getAll();
    if (!news) return httpResponse.NotFound(res, "News not found");
    return httpResponse.Ok(res, news);
  } catch (error: unknown) {
    next((error as Error).message);
  }
};

export const getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const news = await service.getById(id);
        if (!news) return httpResponse.NotFound(res, "News not found");
        return httpResponse.Ok(res, news);
    } catch (error) {
        next((error as Error).message);
    }
};

export const update = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        let news = await service.getById(id);
        if (!news) return httpResponse.NotFound(res, "news not found!");
        const newsUpdated = await service.update(id, req.body);
        return httpResponse.Ok(res, newsUpdated);
    } catch (error) {
        next((error as Error).message);
    }
};

//Cambia estado active: false
export const remove = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const news = await service.getById(id);
        if (!news) return httpResponse.NotFound(res, "news not found!");
        const newsDel = await service.remove(id);
        if(!newsDel) return httpResponse.NotFound(res, "Error deleted news");
        return httpResponse.Ok(res, newsDel);
    } catch (error) {
        next((error as Error).message);
    }
};