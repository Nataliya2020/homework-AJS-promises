import GameSavingLoader from '../GameSavingLoader';

test('checking the load method of the GameSavingLoader class correctness of work', (done) => {
  const data = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };

  GameSavingLoader.load().then((objData) => {
    expect(objData).toEqual(data);
    done();
  });
});
