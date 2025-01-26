const fs = require('fs');

// Function to read the CSV database and return student first names grouped by fields
function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    const fields = {};

    // Read the CSV file asynchronously
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        // Reject the promise if the file can't be read
        return reject(err);
      }

      // Split the file content by new lines to get each row
      const rows = data.split('\n');

      // Iterate over each row (skipping the header)
      rows.forEach((row, index) => {
        if (index === 0 || !row.trim()) return; // Skip header line and empty lines

        // Split the row by commas to get individual columns (firstname, lastname, age, field)
        const columns = row.split(',');

        // Ensure there are at least four columns (firstname, lastname, age, field)
        if (columns.length >= 4) {
          const firstname = columns[0].trim();
          const field = columns[3].trim();

          // Group the first names by field
          if (field && firstname) {
            if (!fields[field]) {
              fields[field] = [];
            }
            fields[field].push(firstname);
          }
        }
      });

      // Resolve the promise with the grouped fields
      resolve(fields);
    });
  });
}

module.exports = { readDatabase };
