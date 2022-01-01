import Router from 'express'
import ProductsController from "./controllers/productsController";

const router = Router ()

router.post ( '/products', ProductsController.create )
router.get ( '/products', ProductsController.getAll )
router.get ( '/products/:id', ProductsController.getOne )
router.put ( '/products', ProductsController.update )
router.delete ( '/products/:id', ProductsController.delete )

export default router