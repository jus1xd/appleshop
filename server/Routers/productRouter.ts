import Router from "express";
import ProductsController from "../controllers/productsController";

const productRouter = Router ();

productRouter.post ( "/products", ProductsController.create );
productRouter.get ( "/products", ProductsController.getAll );
productRouter.get ( "/products/:id", ProductsController.getOne );
productRouter.put ( "/products", ProductsController.update );
productRouter.delete ( "/products/:id", ProductsController.delete );
productRouter.get("/sortProducts", ProductsController.getSortProducts)
export default productRouter;
