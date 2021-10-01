import { getRoutePointsFromServer } from '../../../api/api';
import { recordSaga } from './recordSaga';
import { getRoutePointsSaga } from '../mapSaga';
import { SET_ROUTE, getRoute } from '../../actions/map';

jest.mock('../../../api/api', () => ({
  getRoutePointsFromServer: jest.fn(() => ({routePoints: []}))
}))

describe('map saga', () => {
  it('success', async () => {
    getRoutePointsFromServer.mockImplementation(async () => ({routePoints: []}))

    const dispatched = await recordSaga(getRoutePointsSaga, getRoute())

    expect(dispatched).toEqual([{
      type: SET_ROUTE,
      payload: {
        routePoints: {
          routePoints: []
        }
      }
    }])
  })
})