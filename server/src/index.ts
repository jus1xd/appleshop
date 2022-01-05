<<<<<<< HEAD
require ( 'dotenv' ).config ()
import express from 'express';
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import productRouter from "../Routers/productRouter";
import userRouter from "../Routers/userRouter";
import fileUpload from 'express-fileupload'
import {errorMiddleware} from "../middlewares/error-middleware";

const app = express ();
app.use ( express.json () )
app.use ( express.static ( 'static' ) )
app.use ( cookieParser )
app.use ( fileUpload () )
app.use ( cors () )
app.use ( '/api', productRouter )
app.use ( '/api', userRouter )
app.use ( errorMiddleware )

const startApp = async () => {
    try {
        await mongoose.connect ( process.env.DB_URL )
        app.listen ( process.env.PORT, () => {
            console.log ( `server is listening on ${process.env.PORT}` );
        } );
    } catch (e) {
        console.log ( e )
    }
}
startApp ()
=======
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
>>>>>>> 0de1714941b236d21bafbe56224f0e4b965de840
