const jwt = require('jsonwebtoken');

const authenticate = async (req, res, next) => {
    if (req.path === '/auth/register' || req.path === '/auth/login') {
        return next();
    }

    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        req.user = jwt.verify(token, process.env.JWT_SECRET_KEY);
        next();
    } catch (error) {
        res.status(401).send({ message: 'Unauthorized' });
    }
};

module.exports = authenticate;