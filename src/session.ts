import mongoose from "mongoose";

export interface SessionInterface {
  sessionId: string;
  isGameStarted: boolean;
  headingText: string;
}
const Session = new mongoose.Schema({
  sessionId: { type: String, required: true },
  isGameStarted: { type: Boolean, required: true },
  headingText: { type: String, required: true },
});
export default mongoose.model("session", Session);
