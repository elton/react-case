import { getUser } from './getUser';

test('should be get a user', () => {
  const user = getUser();
  console.log(user);
  expect(user).toBeDefined();
});
