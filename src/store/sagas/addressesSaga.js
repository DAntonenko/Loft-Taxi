import { takeEvery, call, put } from 'redux-saga/effects';
import { getAvailableAddressesFromServer } from '../../api/api';
import { GET_ADDRESSES_LIST, setAddressesList } from '../actions/addresses';
import addresses from '../reducers/addresses';

export function* getAddressesSaga(action) {
  const data = yield call(getAvailableAddressesFromServer);

  if (data.hasOwnProperty('addresses')) {
    const addressesList = addresses.reduce((prev, item) => {
      prev.push({value: item, label: item});

      return prev;
    }, []);

    yield put(setAddressesList(addressesList));
  }
}

export function* addressesSaga() {
  yield takeEvery(GET_ADDRESSES_LIST, getAddressesSaga);
  // yield takeLatest(GET_ADDRESSES_LIST, getAddressesSaga);
}
