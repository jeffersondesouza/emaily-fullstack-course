module.exports = (req, res, next) => {
  console.log('credits guard:', req.user)
  if (req.user.credits < 1) {
    return res.status(403).send({ error: 'Not enough Credits!' });
  }

  return next();
};
