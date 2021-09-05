import { LOG_IN, LOG_IN_ERROR, LOG_OUT } from '../actions/auth';
import { getLoginDataFromLocalStorage, setLoginDataToLocalStorage } from '../../localstorage';

const localStorageData = getLoginDataFromLocalStorage();

const initialState = {
  isLoggedIn: localStorageData.isLoggedIn,
  token: localStorageData.token,
  error: null,
};

export default function auth(state = initialState, action) {
  switch(action.type) {
    case LOG_IN: {
      setLoginDataToLocalStorage(true, action.payload.token);

      return {
        isLoggedIn: true,
        token: action.payload.token,
      };
    }

    case LOG_IN_ERROR: {
      setLoginDataToLocalStorage(true, action.payload.token);

      return {
        isLoggedIn: false,
        token: '',
        error: action.payload,
      };
    }

    case LOG_OUT: {
      setLoginDataToLocalStorage(false, '');

      return {
        isLoggedIn: false,
        token: '',
      };
    }
    
    default:
      return state;
  }
}
