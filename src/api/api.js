export const setLogIn = async (email, password) => {
  return fetch(
    'https://loft-taxi.glitch.me/auth', {
      method: 'POST',
      body: JSON.stringify({
        "email": email,
        "password": password,
      }),
      headers: {
        'Content-type': 'application/json'
      }

    })
  .then(res => res.json())
}

export const setRegistration = async (email, password, name) => {
  return fetch(
    'https://loft-taxi.glitch.me/register', {
      method: 'POST',
      body: JSON.stringify({
        "email": email,
        "password": password,
        "name": name,
      }),
      headers: {
        'Content-type': 'application/json'
      }

    })
  .then(res => res.json())
  .then(data => data);
}
