import jwt from 'jsonwebtoken'
import tokenModel from "../models/tokenModel";

class TokenService {
    generateTokens ( payload ) {
        const accessToken = jwt.sign ( payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '30m'} )
        const refreshToken = jwt.sign ( payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '30d'} )
        return {
            accessToken,
            refreshToken
        }
    }

    validateAccessToken ( token ) {
        try {
            return jwt.verify ( token, process.env.JWT_ACCESS_SECRET );
        } catch (e) {
            return null;
        }
    }

    validateRefreshToken ( token ) {
        try {
            return jwt.verify ( token, process.env.JWT_REFRESH_SECRET );
        } catch (e) {
            return null;
        }
    }
    async saveToken ( userId, refreshToken ) {
        const tokenData = await tokenModel.findOne ( {user: userId} )
        if (tokenData) {
            tokenData.refreshToken = refreshToken
            return tokenData.save ()
        }
        return await tokenModel.create ( {user: userId, refreshToken} )
    }

    async removeToken ( refreshToken ) {
        return tokenModel.deleteOne ( {refreshToken} );
    }
    async findToken(refreshToken) {
        return tokenModel.findOne ( {refreshToken} );
    }
}

export default new TokenService ()