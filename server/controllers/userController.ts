import usersService from "../service/usersService";
import {validationResult} from "express-validator";
import {ApiError} from "../exceptions/api-error";

class UserController {
    async registration ( req, res, next ) {
        try {
            const errors = validationResult ( req );
            if (!errors.isEmpty ()) {
                return next (
                    ApiError.BadRequest ( "Ошибка при валидации" ),
                    errors.array ()
                );
            }
            const {username, email, password, role, cart} = req.body;
            const userData = await usersService.registration (
                username,
                email,
                password,
                role,
                cart
            );
            res.cookie ( "refreshToken", userData.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true,
            } );
            return res.json ( userData );
        } catch (e) {
            next ( e );
        }
    }

    async login ( req, res, next ) {
        try {
            const {email, password} = req.body;
            const userData = await usersService.login ( email, password );
            res.cookie ( 'refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true} )
            return res.json ( userData );
        } catch (e) {
            next ( e );
        }
    }

    async logout ( req, res, next ) {
        try {
            const {refreshToken} = req.cookies;
            console.log ( refreshToken )
            await usersService.logout ( refreshToken );
            res.clearCookie ( "refreshToken" );
            return res.status ( 200 ).json ( {message: "Пользователь вышел из системы"} );
        } catch (e) {
            next ( e );
        }
    }

    async activate ( req, res, next ) {
        try {
            const activationLink = req.params.link;
            await usersService.activate ( activationLink );
            return res.redirect ( process.env.CLIENT_URL );
        } catch (e) {
            next ( e );
        }
    }

    async refresh ( req, res, next ) {
        try {
            const {refreshToken} = req.cookies;
            const userData = await usersService.refresh ( refreshToken );
            res.cookie ( "refreshToken", userData.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true,
            } );
            return res.json ( userData );
        } catch (e) {
            next ( e );
        }
    }

    async addToCart ( req, res, next ) {
        try {
            const idObject = req.body;
            return res.json ( await usersService.addToCart ( idObject ) );
        } catch (e) {
            next ( e );
        }
    }

    async changeQuantity ( req, res, next ) {
        try {
            const idForServerQuantity = req.body;
            return res.json ( await usersService.changeQuantity ( idForServerQuantity ) );
        } catch (e) {
            next ( e );
        }
    }

    async getCart ( req, res, next ) {
        try {
            const userId = req.params.userId;
            return res.json ( await usersService.getCart ( userId ) );
        } catch (e) {
            next ( e );
        }
    }

    async deleteCartItem ( req, res, next ) {
        try {
            const itemToDelete = req.body;
            return res.json ( await usersService.deleteCartItem ( itemToDelete ) );
        } catch (e) {
            next ( e );
        }
    }
}

export default new UserController ();
