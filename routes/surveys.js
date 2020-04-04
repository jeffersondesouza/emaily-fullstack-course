const mongoose = require('mongoose');
const requireCreditsMd = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTempletas/surveyTemplate');

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
  app.post(
    '/api/surveys',
    ...middlewares,
    requireCreditsMd,
    async (req, res) => {
      const { title, subject, body, recipients } = req.body;

      const survey = buildSurvey({
        title,
        subject,
        body,
        recipients,
        userId: req.user.id,
      });

      const mailer = new Mailer(survey, surveyTemplate(survey));

      try {
        await mailer.send();
     /*    await survey.save();
        req.user.credits -= 1;
        const user = await req.user.save(); */

        res.send({});
      } catch (err) {
        console.log('err:', err)
        res.status(422).send(err);
      }
    }
  );
};
