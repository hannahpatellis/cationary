const jwt = require('jsonwebtoken');
//const User = require('mongoose').model('User');
const db = require('../models')
const PassportLocalStrategy = require('passport-local').Strategy;


/**
 * Return the Passport Local Strategy object.
 */
module.exports = new PassportLocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, username, password, done) => {
  const userData = {
    username: username.trim(),
    password: password.trim()
  };

  // find a user by username address
  return db.User.findOne({ username: userData.username }, (err, user) => {
    if (err) { return done(err); }

    if (!user) {
      const error = new Error('Incorrect username or password');
      error.name = 'IncorrectCredentialsError';

      return done(error);
    }

    // check if a hashed user's password is equal to a value saved in the database
    return user.comparePassword(userData.password, (passwordErr, isMatch) => {
      if (err) { return done(err); }

      if (!isMatch) {
        const error = new Error('Incorrect username or password');
        error.name = 'IncorrectCredentialsError';

        return done(error);
      }

      const payload = {
        sub: user._id
      };

      // create a token string
      const token = jwt.sign(payload, process.env.JWT);
      const data = {
        name: user.name
      };

      return done(null, token, data);
    });
  });
});
