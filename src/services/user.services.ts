import { User } from "../types/User";
import { UserModel } from "../models/user.model";

export const create = async (user: User): Promise<User | null> => {
  try {
    const userCreated = await UserModel.create(user);
    if (!userCreated) return null;
    return userCreated;
  } catch (error: unknown) {
    throw new Error((error as Error).message);
  }
};

export const getAll = async (): Promise<User[] | []> => {
  try {
    return await UserModel.find({});
  } catch (error: unknown) {
    throw new Error((error as Error).message);
  }
};

export const getById = async (id: string): Promise<User | null> => {
  try {
    const user = await UserModel.findById(id);
    if (!user) return null;
    return user;
  } catch (error: unknown) {
    throw new Error((error as Error).message);
  }
};

export const update = async (id: string, body: User): Promise<User | null> => {
  try {
    const userUpd = await UserModel.findByIdAndUpdate(id, body, { new: true });
    if (!userUpd) return null;
    return userUpd;
  } catch (error: unknown) {
    throw new Error((error as Error).message);
  }
};

export const remove = async (id: string): Promise<User | null> => {
  try {
    const userUpd = await UserModel.findByIdAndUpdate(
      id,
      { active: false },
      { new: true }
    );
    if (!userUpd) return null;
    return userUpd;
  } catch (error: unknown) {
    throw new Error((error as Error).message);
  }
};
