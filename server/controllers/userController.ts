import User from "../models/userModel";
import bcrypt from 'bcrypt'
import {validationResult} from "express-validator";
import userModel from "../models/userModel";
import jwt from 'jsonwebtoken'

const generateAccessToken = ( id, role ) => {
    const payload = {
        id, role
    }
    return jwt.sign ( payload, 'secret_key', {expiresIn: '24h'} )
}

class userController {
    async registration ( req, res ) {
        try {
            const {name, password, role} = req.body
            const errors = validationResult ( req )
            if (!errors.isEmpty ()) {
                return res.status ( 200 ).json ( {message: "Ошибка при регистрации", errors} )
            }
            const candidate = await User.findOne ( {name} )
            if (candidate) {
                return res.status ( 400 ).json ( {message: "Пользователь с таким именем уже существует"} )
            }
            const hashPassword = bcrypt.hashSync ( password, 7 )
            const user = new User ( {name, password: hashPassword, role} )
            await user.save ()
            return res.json ( {message: "Пользователь успешно зарегистрирован"} )
        } catch (e) {
            console.log ( e )
            res.status ( 400 ).json ( {message: "registration error"} )
        }
    }

    async login ( req, res ) {
        try {
            const {name, password} = req.body
            const user = await userModel.findOne ( {name} )
            if (!user) {
                return res.status ( 400 ).json ( {message: "Пользователь с таким именем не существует"} )
            }
            const validPassword = bcrypt.compareSync ( password, user.password )
            if (!validPassword) {
                return res.status ( 400 ).json ( {message: "Пользователь с таким паролем не существует"} )
            }
            const token = generateAccessToken ( user._id, user.role )
            return res.json ( {token} )
        } catch (e) {
            console.log ( e )
            res.status ( 400 ).json ( {message: "login error"} )
        }
    }
}

export default new userController ()