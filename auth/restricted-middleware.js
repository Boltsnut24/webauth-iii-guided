const bcrypt = require('bcryptjs');
const secrets = require('../config/secrets.js')
const jwt = require('jsonwebtoken')
const Users = require('../users/users-model.js');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(toekn, secrets.jwtSecret, (err, decodedToekn) => {
      if (err) {
        res.status(401).json({message: 'Error with token'});
      } else {
        req.username = decodedToken.username;
      }
    });
  } else {
    res.status(400).json({message: "no token"})
  }
};
