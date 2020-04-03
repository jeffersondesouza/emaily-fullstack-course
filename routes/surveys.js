const mongoose = require('mongoose');
const requireCreditsMd = require('../middlewares/requireCredits');

const Survey = mongoose.model('surveys');

const setRecipients = (recipientsStr) =>
  recipientsStr
    .split(',')
    .map((email) => email.trim())
    .map((email) => ({ email }));

const buildSurvey = (params) => {
  const { title, subject, body, recipients = [], userId } = params;

  return new Survey({
    title,
    subject,
    body,
    recipients: setRecipients(recipients),
    _user: userId,
    dateSent: Date.now(),
    lastResponded: Date.now(),
  });
};

module.exports = (app, ...middlewares) => {
  app.post('/api/surveys', ...middlewares, requireCreditsMd, (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = buildSurvey({
      title,
      subject,
      body,
      recipients,
      userId: req.user.id,
    });
    console.log('survey:', survey);
  });
};
