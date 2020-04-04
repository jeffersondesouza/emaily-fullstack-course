import React from 'react';

const SurveyField = props => {
  const { input, label } = props;

  return (
    <div>
      <label>{label}</label>
      <input {...input} />;
    </div>
  );
};

export default SurveyField;
