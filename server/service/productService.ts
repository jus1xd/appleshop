import Product, {IProduct} from "../models/Product";
import FileService from "./fileService";
import fileService from "./fileService";

class ProductService {
    async create ( product: IProduct, picture : string ) {
        const fileName = fileService.saveFile(picture)
        return await Product.create ( {...product, picture: fileName} )
    }

    async getAll () {
        return Product.find ();
    }

    async getOne ( id: string ) {
        const product = await Product.findById ( id )
        if (!id) {
            throw new Error ( 'Id не указан' )
        }
        return product
    }

    async update ( product: IProduct ) {
        if (!product._id) {
            throw new Error ( 'Id не указан' )
        }
        return Product.findByIdAndUpdate ( product._id, product, {new: true} )
    }

    async delete ( id: string ) {
        if (!id) {
            throw new Error ( 'не указан ID' )
        }
        return Product.findByIdAndDelete ( id );
    }
}

export default new ProductService ()