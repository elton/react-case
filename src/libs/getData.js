import { faker } from '@faker-js/faker';
import { nanoid } from 'nanoid';

export const getUser = () => {
  const card = faker.helpers.contextualCard();
  card['id'] = nanoid();
  card['gender'] = faker.name.gender(true);
  card['title'] = faker.name.jobTitle();
  card['department'] = faker.commerce.department();
  return card;
};

export const getCount = (amount = 1) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: amount });
    }, 500);
  });
};
