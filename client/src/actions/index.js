import axios from 'axios';
import { FETCH_USER, SUBMIT_SURVEY } from './types';

export const fetchUser = () => async dispatch => {
  const { data } = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);
  console.log('res:', res);
  const { data } = res;
  dispatch({ type: FETCH_USER, payload: data });
};

export const submitSurvey = survey => async dispatch => {
  dispatch({ type: SUBMIT_SURVEY, payload: survey });

  const res = await axios.post('/api/surveys', survey);
  console.log('res:', res);
};
