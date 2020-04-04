import React from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';

const FIELDS = [
  { name: 'surveyTitle', label: 'Survey Title' },
  { name: 'surveyLine', label: 'Survey Line' },
  { name: 'surveyBody', label: 'Survey Body' },
  { name: 'surveyList', label: 'Survey List' },
];

const SurveyForm = props => {
  const onSubmit = values => {
    console.log('values:', values);
  };

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
    <form onSubmit={props.handleSubmit(onSubmit)}>
      {renderFields()}
      <button type="submit">Submit</button>
    </form>
  );
};

export default reduxForm({ form: 'surveyForm' })(SurveyForm);
