export default class HolbertonCourse {
  constructor(name, length, students) {
    // Verify the types during object creation
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('name must be a string');
    }

    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new TypeError('length must be a number');
    }

    if (Array.isArray(students) && students.every(student => typeof student === 'string')) {
      this._students = students;
    } else {
      throw new TypeError('students must be an array of strings');
    }
  }

  // Getter and Setter for name
  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new TypeError('name must be a string');
    }
  }

  // Getter and Setter for length
  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value === 'number') {
      this._length = value;
    } else {
      throw new TypeError('length must be a number');
    }
  }

  // Getter and Setter for students
  get students() {
    return this._students;
  }

  set students(value) {
    if (Array.isArray(value) && value.every(student => typeof student === 'string')) {
      this._students = value;
    } else {
      throw new TypeError('students must be an array of strings');
    }
  }
}
