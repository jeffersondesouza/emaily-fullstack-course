const mongoose = require('mongoose');
const { Path } = require('path-parser');
const { URL } = require('url');
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
  app.get('/api/surveys', async (req, res) => {
    const surveys = await Survey.find({ _user: req.user.id }).select({
      recipients: false,
    });

    res.send(surveys);
  });

  app.get('/api/surveys/:surveyId/:choice', (req, res) => {
    res.send('Tanks for voting');
  });

  app.post('/api/survey/webhooks', (req, res) => {
    const surveyEvents = req.body || [];
    const events = surveyEvents
      .map(({ email, url }) => {
        const { pathname } = new URL(url);
        const p = new Path(pathname);
        const match = p.test(pathname);
        if (match) {
          return {
            email,
            surveyId: match.surveyId,
            choice: match.choice,
          };
        }
        return null;
      })
      .filter((event) => !!event);

    events.forEach(({ email, surveyId, choice }) => {
      Survey.updateOne(
        {
          _id: surveyId,
          recipients: {
            $elemMatch: { email, responded: false },
          },
        },
        {
          $inc: { [choice]: 1 },
          $set: { 'recipients.$.responded': true },
          lastResponded: new Date(),
        }
      ).exec();
    });
    res.send({});
  });

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
        await survey.save();
        req.user.credits -= 1;
        const user = await req.user.save();

        res.send(user);
      } catch (err) {
        res.status(422).send(err);
      }
    }
  );
};
