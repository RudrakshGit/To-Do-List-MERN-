const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  let token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    if (token.startsWith('Bearer ')) {
      token = token.slice(7, token.length).trim(); // ✅ Remove "Bearer " part
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    console.error('Token verification failed:', err.message);
    res.status(401).json({ msg: 'Invalid token' });
  }
};
