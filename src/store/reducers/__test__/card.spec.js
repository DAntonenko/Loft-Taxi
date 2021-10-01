import card, { initialState } from '../card';
import { setCard } from '../../actions/card';

describe('card reducer', () => {

  it('sets card data', () => {
    const state = card(initialState, setCard());
    expect(state).toEqual({...initialState, isCardData: true, error: null});
  })
})