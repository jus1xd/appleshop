import {Schema, model} from 'mongoose';

export interface IProduct {
    title: string
    subTitle: string
    price: number
    _id: string
    picture: string
}

const ProductModel = new Schema<IProduct> ( {
    title: {type: String, required: true},
    subTitle: {type: String, required: true},
    price: {type: Number, required: true},
    picture: {type: String}
} )

export default model ( 'Product', ProductModel )