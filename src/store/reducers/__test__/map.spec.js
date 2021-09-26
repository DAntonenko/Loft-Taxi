import map, { initialState } from '../map';
import { getRoute } from '../../actions/map';

describe('map reducer', () => {

  it('sets route', () => {
    const state = map(initialState, getRoute());
    expect(state).toEqual({...initialState, routePoints: []});
  })
})