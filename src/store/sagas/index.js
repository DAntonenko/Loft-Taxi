import { fork, all } from "redux-saga/effects";

import { addressesSaga } from './addressesSaga';
import { authSaga } from './authSaga';
import { cardSaga } from './cardSaga';
import { mapSaga } from './mapSaga';

export default function* rootSaga() {
    yield all([
        fork(addressesSaga),
        fork(authSaga),
        fork(cardSaga),
        fork(mapSaga),
    ]);
}
