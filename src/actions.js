import faker from 'faker';

export const addNewUser = () => {
  const username = `@${faker.internet.userName().toLowerCase()}`;
  return (
    {
      type: 'ADD_NEW_USER',
      username
    }
  )
};
