import mongoose from "mongoose";

export interface CardsInterface {
  sessionId: string;
  value: string;
  content: string;
  id: string;
}

const Cards = new mongoose.Schema({
  sessionId: { type: String, required: true },
  value: { type: String, required: true },
  content: { type: String, required: true },
  id: { type: String, required: true },
});

export default mongoose.model("cards", Cards);
