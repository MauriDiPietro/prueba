import { News } from "../types/News";
import { NewModel } from "../models/news.model";

export const create = async (news: News): Promise<News | null> => {
    try {
        const newsCreated = await NewModel.create(news);
        if(!newsCreated) return null;
        return newsCreated;
    } catch (error: unknown) {
        throw new Error((error as Error).message);
    }
};

export const getAll = async (): Promise<News[] | []> => {
    try {
        return await NewModel.find({});
    } catch (error: unknown) {
        throw new Error((error as Error).message);
    }
};

export const getById = async (id: string): Promise<News | null> => {
    try {
        const news = await NewModel.findById(id);
        if(!news) return null;
        return news;
    } catch (error: unknown) {
        throw new Error((error as Error).message);
    }
};

export const update = async (id: string, body: News): Promise<News | null> => {
    try {
        const newsUpd = await NewModel.findByIdAndUpdate(id, body, { new: true });
        if(!newsUpd) return null;
        return newsUpd;
    } catch (error: unknown) {
        throw new Error((error as Error).message);
    }
};

export const remove = async (id: string): Promise<News | null> => {
    try {
        const newsUpd = await NewModel.findByIdAndUpdate(id, {active: false}, {new: true});
        if(!newsUpd) return null;
        return newsUpd;
    } catch (error: unknown) {
        throw new Error((error as Error).message);
    }
};