import Router from "express";
import userController from "../controllers/userController";
import { body } from "express-validator";

const userRouter = Router();

userRouter.post(
  "/registration",
  body("email").isEmail(),
  body("password").isLength({ min: 3, max: 32 }),
  userController.registration
);
userRouter.post("/login", userController.login);
userRouter.post("/logout", userController.logout);
userRouter.get("/activate/:link", userController.activate);
userRouter.post("/refresh", userController.refresh);
userRouter.put('/addToCart', userController.addToCart)

export default userRouter;
