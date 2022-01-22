import Router from 'express'
import OrderController from "../controllers/orderController";

const orderRouter = Router ()

orderRouter.post ( "/order", OrderController.create );
orderRouter.get ( "/order", OrderController.getAll );
orderRouter.get ( "/order/:id", OrderController.getOne );
orderRouter.put ( "/order", OrderController.update );
orderRouter.delete ( "/order/:id", OrderController.delete );

export default orderRouter