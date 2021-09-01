export const setLoginDataToLocalStorage = (isLoggedIn, token) => {
  localStorage.setItem('loginData', JSON.stringify({ isLoggedIn, token }));
};

export const getLoginDataToLocalStorage = () => {
  if( !localStorage.getItem( 'loginData' )) {
    localStorage.setItem('loginData', JSON.stringify({ isLoggedIn: false, token: '' }));
  }

  return JSON.parse(localStorage.getItem( 'loginData' ));
};
