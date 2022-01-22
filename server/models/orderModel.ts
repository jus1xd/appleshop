import {model, Schema} from "mongoose";
import {CartProduct, Product} from '../../client/src/types'

export interface IOrder {
    _id: string
    user: {
        username: string
        email: string
    }
    orderList: CartProduct[]
    orderDate: Date
}
const orderModel = new Schema<IOrder> ( {
    user: {type: {username: String, email: String}, required: true, _id: false},
    orderList: {type: [{} as Product], required: true},
    orderDate: {type: Date, required: true}
} )

export default model ( "Order", orderModel )