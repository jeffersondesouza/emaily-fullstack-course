const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

const keys = require('./config/keys');

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientId,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
    },
    accessToken => {
      console.log('accessToken:', accessToken);
    }
  )
);

app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

const { PORT } = process.env;
app.listen(PORT || 5000, () => {
  // eslint-disable-next-line no-console
  console.log(`App runing at: http://localhost:${PORT || 5000}/`);
});
