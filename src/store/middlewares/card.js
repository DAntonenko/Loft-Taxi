import { PUSH_CARD_DATA, GET_CARD_DATA, setCard, setCardError } from '../actions/card';
import { pushCardDataToServer, getCardDataFromServer,  } from '../../api/api';

export const card = (store) => (next) => async (action) => {
  switch(action.type) {
    case PUSH_CARD_DATA: {

      const { cardNumber, expiryDate, cardName, cvc, token } = action.payload;
      const { success, error } = await pushCardDataToServer(cardNumber, expiryDate, cardName, cvc, token);

      if (success) {
        store.dispatch(setCard(cardNumber, expiryDate, cardName, cvc));
        console.log('card success')
      }

      break;
    }

    case GET_CARD_DATA: {

      const { token } = action.payload;
      const data = await getCardDataFromServer(token);

      if (data.hasOwnProperty('id')) {
        store.dispatch(setCard(data.cardNumber, data.expiryDate, data.cardName, data.cvc));
      }

      // if (error) {
      //   store.dispatch(setCardError(error));
      // }

      break;
    }

    default: {
      next(action);

      break;
    }
  }
}
