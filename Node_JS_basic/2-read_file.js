const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length === 0) {
      console.log('Number of students: 0');
      return;
    }

    const header = lines[0].split(',');
    const rows = lines.slice(1);

    const fieldMap = {};

    rows.forEach((line) => {
      const values = line.split(',');

      if (values.length !== header.length) return;

      const firstName = values[0];
      const field = values[values.length - 1];

      if (!fieldMap[field]) {
        fieldMap[field] = [];
      }

      fieldMap[field].push(firstName);
    });

    const totalStudents = Object.values(fieldMap).reduce((acc, list) => acc + list.length, 0);
    console.log(`Number of students: ${totalStudents}`);

    for (const [field, students] of Object.entries(fieldMap)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
