import addresses, { initialState } from '../addresses';
import { setAddressesList, setStartAddress, setEndAddress } from '../../actions/addresses';

describe('addresses reducer', () => {
  it('set addresses list', () => {
    const state = addresses(initialState, setAddressesList([{value: 1, label: 1}, {value: 2, label: 2}]));
    expect(state).toEqual({...initialState, addresses: [{value: 1, label: 1}, {value: 2, label: 2}]});
  })
  it('set start address', () => {
    const state = addresses(initialState, setStartAddress('start'));
    expect(state).toEqual({...initialState, startAddress: 'start'});
  })
  it('set end address', () => {
    const state = addresses(initialState, setEndAddress('end'));
    expect(state).toEqual({...initialState, endAddress: 'end'});
  })
})