const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      try {
        const lines = data.split('\n').filter((line) => line.trim() !== '');

        if (lines.length === 0) {
          console.log('Number of students: 0');
          resolve();
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

        resolve();
      } catch (parseError) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

module.exports = countStudents;
