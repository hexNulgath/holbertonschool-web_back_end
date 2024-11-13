export default class Building {
  constructor(sqft) {
    if (typeof sqft === 'number') {
      this._sqft = sqft;
    } else {
      throw new TypeError('sqft must be a number');
    }

    if (typeof this.evacuationWarningMessage !== 'function' && this.constructor !== Building) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }
}
