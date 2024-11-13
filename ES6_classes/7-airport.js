export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string' || typeof code !== 'string') {
      throw new TypeError('values must be a strings');
    }
    this._name = name;
    this._code = code;
  }
  toString() {
    return `[object ${this._code}]`;
  }
}
