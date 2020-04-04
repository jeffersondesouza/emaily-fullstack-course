import React from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';

const SurveyForm = props => {
  const onSubmit = values => {
    console.log('values:', values);
  };

  const renderFields = () => {
    return (
      <div>
        <Field
          type="text"
          name="surveyTitle"
          label="Survey Title"
          component={SurveyField}
        />
        <Field
          type="text"
          name="surveyLine"
          label="Survey Line"
          component={SurveyField}
        />

        <Field
          type="text"
          name="surveyBody"
          label="Survey Body"
          component={SurveyField}
        />

        <Field
          type="text"
          name="surveyList"
          label="Recipeient List"
          component={SurveyField}
        />
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
