import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FIELDS from './formFields';
import * as actions from '../../actions';

const selectSurvey = state => {
  const {
    form: { surveyForm },
  } = state;

  const { values } = surveyForm || {};

  return values;
};

const SurveyFormReview = ({ onCancel }) => {
  const survey = useSelector(selectSurvey);
  const dispatch = useDispatch();

  const handleSendSurvey = () => {
    dispatch(actions.submitSurvey(survey));
  };

  if (!survey) {
    return (
      <div className="center">
        <h3>Les't criat a grat survey</h3>
        <footer>
          <button
            type="button"
            className="teal white-text btn-flat"
            onClick={onCancel}
          >
            Create Survey
          </button>
        </footer>
      </div>
    );
  }

  return (
    <div className="left">
      <h3>Please confirm yout entreis</h3>
      <ul>
        {FIELDS.map(item => (
          <li key={item.name}>
            <p>
              <strong>{item.label}</strong>:&nbsp;
              <span>{survey[item.name]}</span>
            </p>
          </li>
        ))}
      </ul>
      <footer>
        <button
          type="button"
          className="yellow darken-3 btn-flat"
          onClick={onCancel}
        >
          Back
        </button>
        <button
          type="button"
          className="teal btn-flat right white-text"
          onClick={handleSendSurvey}
        >
          Send Survey
          <i className="material-icons right white-text">email</i>
        </button>
      </footer>
    </div>
  );
};

export default SurveyFormReview;
