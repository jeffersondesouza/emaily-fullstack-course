import React from 'react';

const SurveyField = props => {
  const {
    input,
    label,
    meta: { error, touched },
  } = props;

  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: '5px' }} />
      <span className="red-text">{touched && error}</span>
    </div>
  );
};

export default SurveyField;
