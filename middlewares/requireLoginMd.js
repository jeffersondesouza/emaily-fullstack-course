/*
APP -> middleware1 -> middleware2 -> middleware3 -> requests
 */
/* 
função chamada quando o midddleware completa next, podem será vários nexto, 
ex: chame o Next meddle ware quando esse completar
*/
module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: 'You must log in!' });
  }

  return next();
};
