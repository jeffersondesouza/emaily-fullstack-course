import { FETCH_SURVEYS } from '../actions/types';
import Switch from '../utils/Switch';

const updateSurveys = (surveys = []) => {
  return surveys;
};

export default function(state = [], action) {
  return Switch.of(action.type, action.payload)
    .case(FETCH_SURVEYS, updateSurveys)
    .default(state);
}
