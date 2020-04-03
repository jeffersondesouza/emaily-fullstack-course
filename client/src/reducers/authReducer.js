import { FETCH_USER } from '../actions/types';
import Switch from '../utils/Switch';

const updateUser = payload => {
  if (!payload) return false;

  return { ...payload, isLoggedIn: !!payload.googleId };
};

export default function(state = null, action) {
  return Switch.of(action.type, action.payload)
    .case(FETCH_USER, updateUser)
    .default(state);
}
