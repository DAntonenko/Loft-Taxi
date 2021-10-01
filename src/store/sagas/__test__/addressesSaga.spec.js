import { getAvailableAddressesFromServer } from '../../../api/api';
import { recordSaga } from './recordSaga';
import { getAddressesSaga } from '../addressesSaga';
import { SET_ADDRESSES_LIST, getAddressesList } from '../../actions/addresses';

jest.mock('../../../api/api', () => ({
  getAvailableAddressesFromServer: jest.fn(() => ({addresses: ['1', '2']}))
}))

describe('addressesSaga', () => {
  it('success', async () => {
    getAvailableAddressesFromServer.mockImplementation(async () => ({addresses: ['1', '2']}))

    const dispatched = await recordSaga(getAddressesSaga, getAddressesList())

    expect(dispatched).toEqual([{
      type: SET_ADDRESSES_LIST,
      payload: {
        addresses: [{value: '1', label: '1'}, {value: '2', label: '2'}]
      }
    }])
  })
})