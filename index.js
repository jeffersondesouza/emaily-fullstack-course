const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const path = require('path');
const cookieSession = require('cookie-session');
// const cors = require('cors');
/* import crypto from 'crypto'; */
const keys = require('./config/keys');
const requireLoginMd = require('./middlewares/requireLoginMd');

require('./models/User');
require('./models/Survey');
require('./services/passport');
const envVariables = require('./services/envVariables');

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const { PORT } = process.env;
const app = express();

app.use(bodyParser.json());
// app.use(cors());

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
require('./routes/billing')(app, requireLoginMd);
require('./routes/surveys')(app, requireLoginMd);

/* CLIENT Routes */
if (envVariables.isProduction()) {
  // Express will serve up production assests
  // like main.js or main.css, they are at client ./build
  app.use(express.static('client/build'));

  // Express will serve up  the index.html file
  // if it doesn't recognize the route
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT || 5000, () => {
  // eslint-disable-next-line no-console
  console.log(`App runing at: http://localhost:${PORT || 5000}/`);
});
