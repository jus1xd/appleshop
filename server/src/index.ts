import express from 'express';
import mongoose from 'mongoose'
import productRouter from "../Routers/productRouter";
import fileUpload from 'express-fileupload'
import userRouter from "../Routers/userRouter";

const port = 5000;
const DB_URL: string = 'mongodb+srv://lxqtpr:lxqtpr2021@cluster0.03hbe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const app = express ();
app.use ( express.json () )
app.use ( express.static ( 'static' ) )
app.use ( fileUpload () )
app.use ( '/api', productRouter )
app.use ( '/auth', userRouter )

const startApp = async () => {
    try {
        await mongoose.connect ( DB_URL )
        app.listen ( port, () => {
            console.log ( `server is listening on ${port}` );
        } );
    } catch (e) {
        console.log ( e )
    }
}
startApp ()