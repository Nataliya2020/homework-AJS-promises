import GameSavingLoader from '../GameSavingLoader';

afterEach(() => jest.resetModules());
// eslint-disable-next-line prefer-promise-reject-errors
jest.mock('../reader', () => jest.fn().mockImplementationOnce(() => Promise.reject('Error parsing')));

test('error testing', async () => {
  try {
    await GameSavingLoader.load();
  } catch (error) {
    expect(error).toBe('Error parsing');
  }
});
