import { takeEvery, call, put } from 'redux-saga/effects';
import { pushCardDataToServer, getCardDataFromServer,  } from '../../api/api';
import { PUSH_CARD_DATA, GET_CARD_DATA, setCard, setCardError } from '../actions/card';

export function* pushCardDataSaga(action) {
  console.log('SAGA_CARD_PUSH')
  const { cardNumber, expiryDate, cardName, cvc, token } = action.payload;
  const data = yield call(pushCardDataToServer, cardNumber, expiryDate, cardName, cvc, token);

  if (data.success) {
    yield put(setCard(cardNumber, expiryDate, cardName, cvc, token));
  }
}

export function* getCardDataSaga(action) {
  const { token } = action.payload;
  const data = yield call(getCardDataFromServer, token);

  if (data.hasOwnProperty('id')) {
    yield put(setCard(data.cardNumber, data.expiryDate, data.cardName, data.cvc, token));
  }

  // if (data.error) {
  //   yield put(setCardError(data.error));
  // }
}

export function* cardSaga() {
  yield takeEvery(PUSH_CARD_DATA, pushCardDataSaga);
  yield takeEvery(GET_CARD_DATA, getCardDataSaga);
}
