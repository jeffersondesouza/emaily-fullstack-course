import axios from 'axios';
import { FETCH_USER, FETCH_SURVEYS } from './types';

export const fetchUser = () => async dispatch => {
  const { data } = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: data });
};

export const fetchSurveys = () => async dispatch => {
  const { data } = await axios.get('/api/surveys');
  dispatch({ type: FETCH_SURVEYS, payload: data });
};


export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);
  const { data } = res;
  dispatch({ type: FETCH_USER, payload: data });
};

export const submitSurvey = ({ survey, history }) => async dispatch => {
  const res = await axios.post('/api/surveys', survey);

  const { data } = res;
  dispatch({ type: FETCH_USER, payload: data });
  history.push('/surveys')
};


