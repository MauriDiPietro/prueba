import { Schema, model } from "mongoose";
import { News } from "../types/News";

const newsSchema = new Schema<News>({
  title: { type: String, required: true },
  category: { type: String, required: true},
  description: { type: String, required: true },
  author: { type: String, required: true },
  image: { type: String, required: true },
  body: { type: String, required: true },
  date: { type: String, required: true },
  active: { type: Boolean, required: true },
});

export const NewModel = model("news", newsSchema);
