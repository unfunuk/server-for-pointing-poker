import mongoose from "mongoose";

export interface IssueInterface {
  sessionId: string;
  title: string;
  priority: Priorities;
  id: number;
}
export enum Priorities {
  Low = "Low priority",
  Middle = "Middle priority",
  Hight = "Hight priority",
}
const Issues = new mongoose.Schema({
  sessionId: { type: String, required: true },
  title: { type: String, required: true },
  priority: { type: Priorities, required: true },
  id: { type: Number, required: true },
});

export default mongoose.model("issues", Issues);
