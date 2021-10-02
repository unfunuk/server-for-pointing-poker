import mongoose from "mongoose";

export interface UserInterface {
  id: string;
  firstName: string;
  lastName?: string;
  role: string;
  initials: string;
  jobPosition?: string;
  avatarSource?: string;
  sessionId: string;
}
const User = new mongoose.Schema({
  id: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: false },
  role: { type: String, required: true },
  initials: { type: String, required: true },
  jobPosition: { type: String, required: false },
  avatarSource: { type: String, required: false },
  sessionId: { type: String, required: true },
});
export default mongoose.model("user", User);
