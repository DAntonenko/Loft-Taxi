import addresses, { initialState } from '../addresses';
import { setAddressesList, setStartAddress, setEndAddress } from '../../actions/addresses';

describe('addresses reducer', () => {
  it('set start address', () => {
    const state = addresses(initialState, setStartAddress('start'));
    expect(state).toEqual(...initialState, startAddress: 'start');
  })
})