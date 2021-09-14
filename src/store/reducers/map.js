import { SET_ROUTE } from '../actions/map';

const initialState = {
  routePoints: [],
};

export default function map(state = initialState, action) {
  switch(action.type) {
    case SET_ROUTE: {
      return {
        ...state,
        routePoints: action.payload.routePoints
      };
    }
    
    default:
      return state;
  }
}
