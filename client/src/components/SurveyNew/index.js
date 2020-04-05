import React, { useState } from 'react';
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
    <div>
      <SurveyForm onSubmit={handleSubmit} />
    </div>
  );
};

export default SurveyNew;
