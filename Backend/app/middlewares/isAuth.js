const jwt = require('jsonwebtoken');
const { SECRET_ACCESS_KEY } = process.env;

module.exports = (req, res, next) => {
  let token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  token = token.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    req.user = jwt.verify(token, 'student');
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};
