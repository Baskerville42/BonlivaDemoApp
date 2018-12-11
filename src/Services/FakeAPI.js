import uuid from 'uuid';

export const loginApi = credentials => {
  const fakeResponse = {
    token: uuid(),
    data: {
      name: 'John Smith',
      email: 'user@example.com'
    }
  };

  const {
    email,
    password,
  } = credentials;

  if (!credentials || email.length === 0 || password.length === 0) {
    return Promise.reject('No data in the request');
  }

  if (email !== 'user@example.com' || password !== 'qwe123!') {
    return Promise.reject('Email or password is incorrect');
  }

  return Promise.resolve(fakeResponse);
};

export const openJobsApi = () => {
  const fakeObject = () => ({
    key: uuid(),
    title: 'Lorem ipsum',
    company: 'Apple inc',
    city: 'Stockholm',
    salary: `${Math.floor(Math.random() * 250)}-${Math.floor(Math.random() * 300)} rk/tim`,
    companyRate: parseFloat(Math.random() * 5).toFixed(1),
    counter: `${Math.floor(Math.random() * 33)} pass`,
    image: 'https://picsum.photos/125/250/?random'
  });

  return Promise.resolve({
    list: Array.from({length: 200}, () => fakeObject()),
  });
};
