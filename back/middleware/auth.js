const jwt = require('jsonwebtoken');

const authMiddleware = function (req, res, next) {
    const token = req.header('x-auth-token');

    if (!token) {
        return res.status(401).json({ msg: 'Pas de token, autorisation refusée' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log('Token décodé:', decoded);
        req.user = decoded.user;
        next();
    } catch (err) {
        console.error('Erreur de vérification du token:', err);
        res.status(401).json({ msg: 'Token invalide' });
    }
};


module.exports = authMiddleware;