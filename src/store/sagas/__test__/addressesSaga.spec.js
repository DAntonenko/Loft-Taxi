import { getAvailableAddressesFromServer } from '../../../api/api';
import { recordSaga } from './recordSaga';
import { getAddressesSaga, addressesSaga } from '../addressesSaga';
import { GET_ADDRESSES_LIST } from '../../actions/addresses';

jest.mock('../../../api/api', () => ({
  getAvailableAddressesFromServer: jest.fn(() => ({addresses: ['1', '2']}))
}))

describe('addressesSaga', () => {
  it('success', async () => {
    getAvailableAddressesFromServer.mockImplementation(async () => ({addresses: ['1', '2']}))

    const dispatched = await recordSaga(addressesSaga, getAddressesSaga())

    expect(dispatched).toEqual([{
      type: GET_ADDRESSES_LIST,
      payload: {
        addressesList: [{value: '1', label: '1'}, {value: '2', label: '2'}]
      }
    }])
  })
})