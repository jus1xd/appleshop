import ProductService from "../service/productService";
import CartService from "../service/cartService";

class CartController {
    async create ( req, res ) {
        try {
            const product = await CartService.create ( req.body, req.files.picture );
            res.status ( 200 ).json ( product );
        } catch (e) {
            res.status ( 500 ).json ( e );
        }
    }

    async getAll ( req, res ) {
        try {
            const products = await CartService.getAll ();
            return res.json ( products );
        } catch (e) {
            res.status ( 500 ).json ( e );
        }
    }

    async getOne ( req, res ) {
        try {
            const product = await CartService.getOne ( req.params.id );
            return res.json ( product );
        } catch (e) {
            res.status ( 500 ).json ( e );
        }
    }

    async update ( req, res ) {
        try {
            const updatedProduct = await CartService.update ( req.body );
            return res.json ( updatedProduct );
        } catch (e) {
            res.status ( 500 ).json ( e.message );
        }
    }

    async delete ( req, res ) {
        try {
            const product = await ProductService.delete ( req.params.id );
            return res.json ( product );
        } catch (e) {
            res.status ( 500 ).json ( e.message );
        }
    }
}

export default new CartController ();
