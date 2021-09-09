import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import { authSaga } from './sagas/authSaga';
import { cardSaga } from './sagas/cardSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware),
  )
);

sagaMiddleware.run(authSaga);
sagaMiddleware.run(cardSaga);
