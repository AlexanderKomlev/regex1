export default class Validator {
  static validateUsername(usernmame) {
    const re1 = /^[^0-9-_][a-z0-9-_]+[^0-9-_]$/i;
    const re2 = /[0-9]{4,}/;

    return re1.test(usernmame) && !re2.test(usernmame);
  }
}
