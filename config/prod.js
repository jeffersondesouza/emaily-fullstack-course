module.exports = {
  googleClientId: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
  callbackURL:
    'https://morning-chamber-92877.herokuapp.com/auth/google/callback',
  stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY,
  sendGridKey: process.env.SEND_GRID_KEY,
};

/* 

  googleClientId:
    '119552001929-3mhg37qpga3qs8859rq7jko4bdpkm1et.apps.googleusercontent.com',
  googleClientSecret: 'efYftcK5VVIV-czZGmm9BtXh',
  mongoURI:
    'mongodb+srv://duppoe:duppoe@cluster0-giujg.mongodb.net/test?retryWrites=true&w=majority',
  cookieKey: 'qwer',  
  */
