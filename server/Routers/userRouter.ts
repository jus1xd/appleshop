import Router from 'express'
import userController from "../controllers/userController";
import {check} from 'express-validator'
const userRouter = Router()

userRouter.post('/registration',[
    check('name','Имя пользователя не может быть пустым').notEmpty(),
    check('password','Пароль не может быть меньше 4 и больше 10 символов').notEmpty().isLength({min: 4, max: 10}),
], userController.registration)
userRouter.post('/login', userController.login)

export default userRouter