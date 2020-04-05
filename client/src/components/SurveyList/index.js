import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as actions from '../../actions';

const SurveyList = () => {
  const surveys = useSelector(state => state.surveys);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchSurveys());
  }, []);

  /* 
  
  yes: 0
no: 0
_id: "5e89e8cbde2a4a2e26c111b7"
title: "Campain 1"
subject: "TEste 1"
body: "teste o camapain"
_user: "5e885d243620eb0f34ad3831"
dateSent: "2020-04-05T14:18:51.351Z"
lastResponded: 
*/
  return (
    <div>
      {surveys.map(survey => (
        <div className="card darken-1" key={survey._id}>
          <div className="card-content">
            <span className="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="right">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a>Yes: {survey.yes}</a>
            <a>No: {survey.no}</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SurveyList;
