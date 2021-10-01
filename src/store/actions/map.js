export const GET_ROUTE = 'GET_ROUTE';
export const SET_ROUTE = 'SET_ROUTE';

export const getRoute = (startAddress, endAddress) => ({
  type: GET_ROUTE,
  payload: { startAddress, endAddress }
});

export const setRoute = (routePoints) => ({
  type: SET_ROUTE,
  payload: { routePoints },
});
