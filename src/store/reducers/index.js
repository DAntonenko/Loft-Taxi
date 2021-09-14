import { combineReducers } from 'redux';
import addresses from './addresses';
import auth from './auth';
import card from './card';
import map from './map';

export default combineReducers({addresses, auth, card, map});