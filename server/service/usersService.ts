import UserModel from "../models/userModel";
import bcrypt from 'bcrypt'
import * as uuid from 'uuid'
import tokenService from "./tokenService";
import {UserDto} from "../dtos/userDto";
import {sendActivationMail} from "./mailService";
import {ApiError} from "../exceptions/api-error";

class UserService {
    async registration ( username, email, password, role, cart ) {
        const candidate = await UserModel.findOne ( {email} )
        if (candidate) {
            throw ApiError.BadRequest ( 'Пользователь с таким email уже существует' )
        }
        const hashPassword = await bcrypt.hash ( password, 3 )
        const activationLink = uuid.v4 ()
        const user = await UserModel.create ( {username, email, password: hashPassword, activationLink, cart, role} )
        await sendActivationMail ( email, `${process.env.API_URL}auth/activate/${activationLink}` );
        const userDto = new UserDto ( user )
        const tokens = tokenService.generateTokens ( {...userDto} )
        await tokenService.saveToken ( userDto.id, tokens.refreshToken )
        return {...tokens,}
    }

    async login ( email, password ) {
        const user = await UserModel.findOne ( {email} )
        if (!user) {
            throw ApiError.BadRequest ( `Пользователь с таким ${email} не найден` )
        }
        const isPassEquals = await bcrypt.compare ( password, user.password );
        if (!isPassEquals) {
            throw ApiError.BadRequest ( 'Неверный пароль' );
        }
        const userDto = new UserDto ( user );
        const tokens = tokenService.generateTokens ( {...userDto} );
        await tokenService.saveToken ( userDto.id, tokens.refreshToken );
        return {...tokens}
    }

    async logout ( refreshToken ) {
        return await tokenService.removeToken ( refreshToken );
    }

    async activate ( activationLink ) {
        const user = await UserModel.findOne ( {activationLink} )
        if (!user) {
            throw ApiError.BadRequest ( 'Некорректная ссылка для активации' )
        }
        user.isActivated = true
        await user.save ()
    }

    async refresh ( refreshToken ) {
        if (!refreshToken) {
            throw ApiError.UnauthorizedError ();
        }
        const userData = tokenService.validateRefreshToken ( refreshToken );
        const tokenFromDb = await tokenService.findToken ( refreshToken );
        if (!userData || !tokenFromDb) {
            throw ApiError.UnauthorizedError ();
        }
        const user = await UserModel.findById ( userData.id );
        const userDto = new UserDto ( user );
        const tokens = tokenService.generateTokens ( {...userDto} );
        await tokenService.saveToken ( userDto.id, tokens.refreshToken );
        return {...tokens}
    }

    async addToCart ( idObject ) {
        const updatedUser = await UserModel.findById ( idObject.userId )
        updatedUser.cart.push ( idObject.productId )
        return UserModel.findByIdAndUpdate ( idObject.userId, updatedUser, {new: true} );
    }
}

export default new UserService ()