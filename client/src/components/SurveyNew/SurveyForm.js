import React from 'react';
import { NavLink } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';

import FIELDS from './formFields';

const SurveyForm = props => {
  const renderFields = () => {
    return (
      <div>
        {FIELDS.map(item => (
          <Field
            key={item.name}
            name={item.name}
            label={item.label}
            type="text"
            component={SurveyField}
          />
        ))}
      </div>
    );
  };

  return (
    <div>
      <form onSubmit={props.handleSubmit(props.onSubmit)}>
        {renderFields()}
        <NavLink to="/surveys" className="red btn-flat white-text">
          Cancel
        </NavLink>
        <button type="submit" className="teal btn-flat right white-text">
          Next <i className="material-icons">done</i>
        </button>
      </form>
    </div>
  );
};

function validate(values) {
  const errors = {};

  errors.emails = validateEmails(values.emails);

  FIELDS.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = 'This field is required';
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false,
})(SurveyForm);
