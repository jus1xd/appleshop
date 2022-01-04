import express from "express";
import mongoose from "mongoose";
import cors from 'cors'
import productRouter from "../Routers/productRouter";
import fileUpload from "express-fileupload";
import cartRouter from "../Routers/cartRouter";

const port = 5000;
const DB_URL: string =
  "mongodb+srv://lxqtpr:lxqtpr2021@cluster0.03hbe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const app = express();

app.use(cors())

app.use(express.json());
app.use(express.static("static"));
app.use(fileUpload());
app.use("/api", productRouter);
app.use("/cart", cartRouter);

const startApp = async () => {
  try {
    await mongoose.connect(DB_URL);
    app.listen(port, () => {
      console.log(`server is listening on ${port}`);
    });
  } catch (e) {
    console.log(e);
  }
};
startApp();
