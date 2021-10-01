import auth, { initialState } from '../auth';
import { logIn, logOut } from '../../actions/auth';

describe('auth reducer', () => {
  it('sets log in', () => {
    const state = auth(initialState, logIn('rec272HbhNOndqJVG'));
    expect(state).toEqual({...initialState, isLoggedIn: true, token: 'rec272HbhNOndqJVG'});
  })
  it('sets log out', () => {
    const state = auth(initialState, logOut());
    expect(state).toEqual({...initialState, isLoggedIn: false, token: ''});
  })
})