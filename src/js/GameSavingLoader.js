import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      const data = read();
      data.then((parseData) => json(parseData))
        .then((parseData) => resolve(new GameSaving(parseData)))
        . catch((error) => reject(error));
    });
  }
}
