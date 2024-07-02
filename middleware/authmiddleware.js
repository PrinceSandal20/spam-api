const jwt = require('jsonwebtoken');

const jwtSecret = 'princesandal';

const authenticateUser = (req, res, next) => {
  const token = req.header('x-auth-token');
  console.log('Token:', token); // Log the token to check if it's present

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, jwtSecret);

    req.user = decoded.user;
    next();
  } catch (err) {
    console.error('Token verification error:', err);
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

module.exports = {
  authenticateUser,
};
