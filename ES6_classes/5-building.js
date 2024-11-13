export default class Building {
  constructor(sqft) {
    if (typeof sqft === 'number') { // 'number' in lowercase
      this._sqft = sqft;
    } else {
      throw new TypeError('sqft must be a number');
    }

    // Check if the subclass has overridden evacuationWarningMessage
    if (this.constructor !== Building && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
