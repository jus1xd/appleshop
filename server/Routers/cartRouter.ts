import Router from 'express'
import CartController from "../controllers/cartController";
const cartRouter = Router ()

cartRouter.post ( '/products/cart', CartController.create )
cartRouter.get ( '/products/cart', CartController.getAll )
cartRouter.get ( '/products/cart/:id', CartController.getOne )
cartRouter.put ( '/products/cart', CartController.update )
cartRouter.delete ( '/products/cart/:id', CartController.delete )

export default cartRouter