export const loginApi = credentials => {
  const fakeResponse = {
    token: 'abc123!',
    data: {
      name: 'John Smith',
      email: 'user@example.com'
    }
  };

  const {
    email,
    password,
  } = credentials;

  if(!credentials || email.length === 0 || password.length === 0) {
    return Promise.reject('No data in the request');
  }

  if(email !== 'user@example.com' || password !== 'qwe123!') {
    return Promise.reject('Email or password is incorrect');
  }

  return Promise.resolve(fakeResponse);
};
