import { takeEvery, call, put } from 'redux-saga/effects';
import { setLogIn, setRegistration } from '../../api/api';
import { AUTHENTICATE, REGISTRATION, logIn, logInError } from '../actions/auth';

export function* authenticateSaga(action) {
  const { email, password } = action.payload;
  const data = yield call(setLogIn, email, password);

  if (data.success) {
    yield put(logIn(data.token));
  }

  if (data.error) {
    yield put(logInError(data.error));
  }
}

export function* registrationSaga(action) {
  const { email, password, name, surname } = action.payload;
  const data = yield call(setRegistration, email, password, name, surname);

  if (data.success) {
    yield put(logIn(data.token));
  }
}

export function* authSaga() {
  yield takeEvery(AUTHENTICATE, authenticateSaga);
  yield takeEvery(REGISTRATION, registrationSaga);
}
