const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');
const cors = require('cors');  
/* import crypto from 'crypto'; */
const keys = require('./config/keys');

require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const { PORT } = process.env;
const app = express();

app.use(cors());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get('/casos', (req, res) => {
  res.send({
    suspeitos: 10,
    descartados: 20,
    confirmados: 1,
    recuperados: 1,
    obtos: 1,
  });
});

require('./routes/auth')(app);

app.listen(PORT || 5000, () => {
  // eslint-disable-next-line no-console
  console.log(`App runing at: http://localhost:${PORT || 5000}/`);
});
