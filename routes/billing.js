const stripeMod = require('stripe');
const keys = require('../config/keys');

const stripe = stripeMod(keys.stripeSecretKey);

module.exports = (app, ...middlewares) => {
  app.post('/api/stripe', ...middlewares, async (req, res) => {
    await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '$5 for 5 credits',
      source: req.body.id,
    });

    req.user.credits += 5;

    const user = await req.user.save();
    res.send(user);
  });
};
