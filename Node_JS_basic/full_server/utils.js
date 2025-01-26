const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

// Function to read the CSV database and return student first names grouped by fields
function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    const fields = {};

    // Read the CSV file asynchronously
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row) => {
        const { firstname, field } = row;

        // Group the first names by field
        if (field && firstname) {
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        }
      })
      .on('end', () => {
        // After reading the CSV, resolve the promise with the fields object
        resolve(fields);
      })
      .on('error', (err) => {
        // Reject the promise if an error occurs while reading the file
        reject(err);
      });
  });
}

module.exports = { readDatabase };
