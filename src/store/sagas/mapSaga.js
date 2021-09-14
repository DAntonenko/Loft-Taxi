import { takeEvery, call, put } from 'redux-saga/effects';
import { getRoutePointsFromServer } from '../../api/api';
import { GET_ROUTE, setRoute } from '../actions/map';

export function* getRoutePointsSaga(action) {
  const { startAddress, endAddress } = action.payload;
  console.log(action.payload)
  console.log(startAddress)
  console.log(endAddress)
  const data = yield call(getRoutePointsFromServer, startAddress, endAddress);

  if (data) {
    const routePoints = data;

    yield put(setRoute(routePoints));
  }
}

export function* mapSaga() {
  yield takeEvery(GET_ROUTE, getRoutePointsSaga);
}
