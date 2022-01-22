const ApiError = require ( '../exceptions/api-error' );
const tokenService = require ( '../service/token-service' );

export const RoleMiddleware = ( req, res, next ) => {
    try {
        const accessToken = req.body.accessToken;
        if (!accessToken) {
            return next ( ApiError.UnauthorizedError () );
        }
        const userData = tokenService.validateAccessToken ( accessToken );
        if (!userData) {
            return next ( ApiError.UnauthorizedError () );
        }
        if (userData.role == 'ADMIN') {
            req.user = userData;
        }
        next ();
    } catch (e) {
        return next ( ApiError.UnauthorizedError () );
    }
};