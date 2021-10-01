import mongoose from "mongoose";

export interface SessionInterface {
  sessionId: string;
}
const Session = new mongoose.Schema({
  sessionId: { type: String, required: true },
});
export default mongoose.model("session", Session);
