import Router from 'express'
import CartController from "../controllers/cartController";
const cartRouter = Router ()

cartRouter.post ( '/products', CartController.create )
cartRouter.get ( '/products', CartController.getAll )
cartRouter.get ( '/products/:id', CartController.getOne )
cartRouter.put ( '/products', CartController.update )
cartRouter.delete ( '/products/:id', CartController.delete )

export default cartRouter