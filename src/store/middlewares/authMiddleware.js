import { AUTHENTICATE, REGISTRATION, logIn, logInError } from '../actions/auth';
import { setLogIn, setRegistration,  } from '../../api/api';

export const authMiddleware = (store) => (next) => async (action) => {
  switch(action.type) {
    case AUTHENTICATE: {

      const { email, password } = action.payload;
      const data = await setLogIn(email, password);

      if (data.success) {
        store.dispatch(logIn(data.token));
      }

      if (data.error) {
        store.dispatch(logInError(data.error));
      }

      break;
    }

    case REGISTRATION: {

      const { email, password, name, surname } = action.payload;
      const data = await setRegistration(email, password, name, surname);

      if (data.success) {
        store.dispatch(logIn(data.token));
      }

      break;
    }

    default: {
      next(action);

      break;
    }
  }
}
