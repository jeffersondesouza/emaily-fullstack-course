const express = require('express');
require('./services/passport');

const { PORT } = process.env;
const app = express();

require('./routes/auth')(app);

app.listen(PORT || 5000, () => {
  // eslint-disable-next-line no-console
  console.log(`App runing at: http://localhost:${PORT || 5000}/`);
});
