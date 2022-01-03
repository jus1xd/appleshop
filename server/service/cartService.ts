import Product, {IProduct} from "../models/productModel";
import fileService from "./fileService";
import Cart from '../models/cartItemsModel'
class CartService {
    async create ( product: IProduct, picture : string ) {
        const fileName = fileService.saveFile(picture)
        return await Cart.create ( {...product, picture: fileName} )
    }

    async getAll () {
        return await Cart.find ().exec().toObject();
    }

    async getOne ( id: string ) {
        const product = await Cart.findById ( id )
        if (!id) {
            throw new Error ( 'Id не указан' )
        }
        return product
    }

    async update ( product: IProduct ) {
        if (!product._id) {
            throw new Error ( 'Id не указан' )
        }
        return Cart.findByIdAndUpdate ( product._id, product, {new: true} )
    }

    async delete ( id: string ) {
        if (!id) {
            throw new Error ( 'не указан ID' )
        }
        return Cart.findByIdAndDelete ( id );
    }
}

export default new CartService ()