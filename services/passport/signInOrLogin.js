const mongoose = require('mongoose');

const User = mongoose.model('users');

const findUserById = require('./findUserById');

const login = (user, doneFn) => doneFn(null, user);

const singUpUser = async (profile, doneFn) => {
  const user = await new User({ googleId: profile.id }).save();
  doneFn(null, user);
};

const singInOrLogin = async (accessToken, refreshToken, profile, done) => {
  const existingUser = await findUserById(profile.id);

  if (existingUser) {
    return login(existingUser, done);
  }

  return singUpUser(profile, done);
};

module.exports = singInOrLogin;
