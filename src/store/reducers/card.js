import { SET_CARD, SET_CARD_ERROR } from '../actions/card';
import { getCardDataFromLocalStorage, setCardDataToLocalStorage } from '../../localstorage';

const localStorageData = getCardDataFromLocalStorage();

const initialState = {
  cardNumber: localStorageData.cardNumber,
  expiryDate: localStorageData.expiryDate,
  cardName: localStorageData.cardName,
  cvc: localStorageData.cvc,
  token: localStorageData.token,
  error: localStorageData.error,
};

export default function card(state = initialState, action) {
  switch(action.type) {
    case SET_CARD: {
      const { cardNumber, expiryDate, cardName, cvc, token } = action.payload;
      setCardDataToLocalStorage(cardNumber, expiryDate, cardName, cvc, token);

      return {
        cardNumber: cardNumber,
        expiryDate: expiryDate,
        cardName: cardName,
        cvc: cvc,
        token: token,
        error: '',
      };
    }

    case SET_CARD_ERROR: {

      return {
        cardNumber: '',
        expiryDate: '',
        cardName: '',
        cvc: '',
        token: '',
        error: action.payload.error,
      };
    }
    
    default:
      return state;
  }
}
