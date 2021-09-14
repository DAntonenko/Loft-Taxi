import { SET_CARD, SET_CARD_ERROR } from '../actions/card';
import { getCardDataFromLocalStorage, setCardDataToLocalStorage } from '../../localstorage';

const localStorageData = getCardDataFromLocalStorage();

const initialState = {
  cardNumber: localStorageData.cardNumber,
  expiryDate: localStorageData.expiryDate,
  cardName: localStorageData.cardName,
  cvc: localStorageData.cvc,
  isCardData: localStorageData.isCardData,
  error: null,
};

export default function card(state = initialState, action) {
  switch(action.type) {
    case SET_CARD: {
      const { cardNumber, expiryDate, cardName, cvc } = action.payload;
      setCardDataToLocalStorage(cardNumber, expiryDate, cardName, cvc, true);

      return {
        // ...state,
        cardNumber: cardNumber,
        expiryDate: expiryDate,
        cardName: cardName,
        cvc: cvc,
        isCardData: true,
        error: null,
      };
    }

    case SET_CARD_ERROR: {

      return {
        cardNumber: '',
        expiryDate: '',
        cardName: '',
        cvc: '',
        isCardData: false,
        error: action.payload.error,
      };
    }
    
    default:
      return state;
  }
}
