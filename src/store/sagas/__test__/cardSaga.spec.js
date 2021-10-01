import { pushCardDataToServer } from '../../../api/api';
import { recordSaga } from './recordSaga';
import { setCardSaga } from '../cardSaga';
import { SET_CARD, setCard } from '../../actions/card';

jest.mock('../../../api/api', () => ({
  pushCardDataToServer: jest.fn(() => ({success: true, token: 'rec272HbhNOndqJVG'}))
}))

describe('cardSaga', () => {
  it('success', async () => {
    pushCardDataToServer.mockImplementation(async () => ({success: true}))

    const dispatched = await recordSaga(setCardSaga, setCard())

    expect(dispatched).toEqual([{
      type: SET_CARD,
      payload: {
        cardName: undefined,
        cardNumber: undefined,
        cvc: undefined,
        expiryDate: undefined,
        token: undefined,
      }
    }])
  })
})