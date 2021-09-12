import { combineReducers } from 'redux';
import addresses from './addresses';
import auth from './auth';
import card from './card';

export default combineReducers({addresses, auth, card});