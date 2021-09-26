import { setLogIn } from '../../../api/api';
import { recordSaga } from './recordSaga';
import { authenticateSaga } from '../authSaga';
import { LOG_IN, logIn } from '../../actions/auth';

jest.mock('../../../api/api', () => ({
  setLogIn: jest.fn(() => ({success: true, token: 'rec272HbhNOndqJVG'}))
}))

describe('authSaga', () => {
  it('success', async () => {
    setLogIn.mockImplementation(async () => ({success: true, token: 'rec272HbhNOndqJVG'}))

    const dispatched = await recordSaga(authenticateSaga, logIn())

    expect(dispatched).toEqual([{
      type: LOG_IN,
      payload: {token: "rec272HbhNOndqJVG"}
    }])
  })
})