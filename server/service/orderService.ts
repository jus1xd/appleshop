import orderModel, {IOrder} from "../models/orderModel";
import UserModel from "../models/userModel";

class orderService {
    async create ( order: IOrder ) {
        const email = await UserModel.find ( {email: order.user.email} )
        if (email.length === 0) {
            throw new Error ( "Пользователь с таким email не существует" );
        }
        return await orderModel.create ( {...order} );
    }

    async getAll () {
        return orderModel.find ();
    }

    async getOne ( id: string ) {
        const order = await orderModel.findById ( id );
        if (!id) {
            throw new Error ( "Id не указан" );
        }
        return order;
    }

    async update ( order: IOrder ) {
        if (!order._id) {
            throw new Error ( "Id не указан" );
        }
        return orderModel.findByIdAndUpdate ( order._id, order, {new: true} );
    }

    async delete ( id: string ) {
        if (!id) {
            throw new Error ( "не указан ID" );
        }
        return orderModel.findByIdAndDelete ( id );
    }
}

export default new orderService ();
