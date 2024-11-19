export default function getListStudents() {
  class Student {
    constructor(id, firstName, location) {
      this.id = id;
      this.firstName = firstName;
      this.location = location;
    }
  }

  return [
    new Student(1, 'Guillaume', 'San Francisco'),
    new Student(2, 'James', 'Columbia'),
    new Student(5, 'Serena', 'San Francisco'),
  ];
}
