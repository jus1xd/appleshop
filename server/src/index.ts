require("dotenv").config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import productRouter from "../Routers/productRouter";
import userRouter from "../Routers/userRouter";
import fileUpload from "express-fileupload";
import { errorMiddleware } from "../middlewares/error-middleware";

const app = express();
app.use(express.json());
app.use(express.static("static"));
app.use(cookieParser());
app.use(fileUpload());
app.use(cors());
app.use("/api", productRouter);
app.use("/api", userRouter);
app.use(errorMiddleware);

const startApp = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    app.listen(process.env.PORT, () => {
      console.log(`server is listening on ${process.env.PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};
startApp();
