export const GET_ADDRESSES_LIST = 'GET_ADDRESSES_LIST';
export const SET_ADDRESSES_LIST = 'SET_ADDRESSES_LIST';
export const START_ADDRESS = 'START_ADDRESS';
export const END_ADDRESS = 'END_ADDRESS';

export const getAddressesList = () => ({
  type: GET_ADDRESSES_LIST,
});

export const setAddressesList = (addresses) => ({
  type: SET_ADDRESSES_LIST,
  payload: { addresses },
});

export const setStartAddress = (startAddress) => ({
  type: START_ADDRESS,
  payload: { startAddress }
});

export const setEndAddress = (endAddress) => ({
  type: END_ADDRESS,
  payload: { endAddress }
});
