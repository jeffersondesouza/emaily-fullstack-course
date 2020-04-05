import React, { useState } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

const SurveyNew = () => {
  const [showReview, setShowReview] = useState(false);

  const handleSubmit = values => {
    setShowReview(true);
  };

  const handleCancel = () => {
    setShowReview(false);
  };

  if (showReview) {
    return <SurveyFormReview onCancel={handleCancel} />;
  }

  return (
    <div style={{ marginTop: '40px' }}>
      <SurveyForm onSubmit={handleSubmit} />
    </div>
  );
};

export default reduxForm({
  form: 'surveyForm',
})(SurveyNew);
