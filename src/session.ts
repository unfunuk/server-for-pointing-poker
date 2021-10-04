import mongoose from "mongoose";

export interface SessionInterface {
  sessionId: string;
  isGameStarted: boolean;
}
const Session = new mongoose.Schema({
  sessionId: { type: String, required: true },
  isGameStarted: { type: Boolean, required: true },
});
export default mongoose.model("session", Session);
