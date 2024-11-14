const cloneSymbol = Symbol('clone');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  [cloneSymbol]() {
    return new (Object.getPrototypeOf(this).constructor)(this._brand, this._motor, this._color);
  }

  cloneCar() {
    return this[cloneSymbol]();
  }
}
