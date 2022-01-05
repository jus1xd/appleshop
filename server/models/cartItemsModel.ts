import {Schema, model} from 'mongoose';
import {IProduct} from "./productModel";

const cartItemsModel = new Schema<IProduct> ( {
    title: {type: String, required: true},
    price: {type: Number, required: true},
    picture: {type: String}
} )

export default model ( 'Cart', cartItemsModel )