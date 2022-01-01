import express from 'express';
import mongoose from 'mongoose'
import router from "../router";
import fileUpload from 'express-fileupload'

const port = 3000;
const DB_URL: string = 'mongodb+srv://lxqtpr:lxqtpr2021@cluster0.03hbe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const app = express ();
app.use ( express.json () )
app.use ( express.static ( 'static' ) )
app.use ( fileUpload () )
app.use ( '/api', router )

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