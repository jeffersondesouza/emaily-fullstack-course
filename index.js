const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

const { PORT } = process.env;

app.listen(PORT || 5000, () => {
  // eslint-disable-next-line no-console
  console.log(`App runing at: http://localhost:${PORT || 5000}/`);
});


/* 
https://morning-chamber-92877.herokuapp.com/ 
https://git.heroku.com/morning-chamber-92877.git
 */