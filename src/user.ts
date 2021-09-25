import mongoose from "mongoose";

export interface UserInterface {
  id: string;
  firstName: string;
  lastName: string;
  role: string;
  initials: string;
  jobPosition: string;
  avatarSource: string;
}
const User = new mongoose.Schema({
  id: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  role: { type: String, required: true },
  initials: { type: String, required: true },
  jobPosition: { type: String, required: true },
  avatarSource: { type: String, required: true },
});
export default mongoose.model("user", User);
