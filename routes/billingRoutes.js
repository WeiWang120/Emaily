const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecrectKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = (app) => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: req.body.amount,
      currency: "usd",
      source: req.body.id, // obtained with Stripe.js
      description: "$"+req.body.amount+" for "+req.body.amount+" credits"
    });

    req.user.credits += 5;
    const user = await req.user.save();
    res.send(user);
  });
}
