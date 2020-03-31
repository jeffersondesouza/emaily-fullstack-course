const mongoose = require('mongoose');

const User = mongoose.model('users');

const login = (user, doneFn) => doneFn(null, user);

const singUpUser = async (profile, doneFn) => {
  const user = await new User({ googleId: profile.id }).save();
  doneFn(null, user);
};

const singInOrLogin = async (accessToken, refreshToken, profile, done) => {
  const existingUser = await User.findOne({ googleId: profile.id });

  if (existingUser) {
    login(existingUser, done);
  } else {
    singUpUser(profile, done);
  }
};

module.exports = singInOrLogin;
