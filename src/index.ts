import mongoose from "mongoose";
import fileUpload from "express-fileupload";
import express from "express";
import cors from "cors";
import router from "./router";

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
const DB_URL =
  process.env.DATABASE_URL ||
  "mongodb+srv://user:unfunuk@cluster.dgxmd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
app.use(express.json());
app.use(fileUpload({}));
app.use("/api", router);

(async function startApp() {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(process.env.PORT || 3000, () => console.log("start"));
  } catch (e) {
    console.log(e);
  }
})();
