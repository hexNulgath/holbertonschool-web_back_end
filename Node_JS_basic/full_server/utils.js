const fs = require('fs');
const path = require('path');

// Function to read the database and return student first names grouped by fields
function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    // Check if the file exists first
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        // Reject the promise if there's an error reading the file
        return reject(err);
      }

      try {
        // Parse the file content assuming it's JSON
        const students = JSON.parse(data);

        // Create an object to store arrays of first names per field
        const fields = {};

        // Iterate over the students and group first names by field
        students.forEach(student => {
          const { firstname, field } = student;
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        });

        // Resolve the promise with the object of arrays of first names per field
        resolve(fields);
      } catch (parseError) {
        // Reject the promise if JSON parsing fails
        reject(new Error('Error parsing the student data.'));
      }
    });
  });
}

module.exports = { readDatabase };
