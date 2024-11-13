export default class Building {
  constructor(sqft) {
    if (new.target === Building) {
      throw new Error('Cannot instantiate an abstract class.');
    }
    if (typeof sqft === 'number') {
      this._sqft = sqft;
    } else {
      throw new TypeError('sqft must be a Number');
    }
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
