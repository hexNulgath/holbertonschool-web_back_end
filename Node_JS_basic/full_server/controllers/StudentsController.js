const { readDatabase } = require('../utils');

class StudentsController {
  // Static method to get all students
  static getAllStudents(req, res) {
    // Call the readDatabase function to get the list of students
    readDatabase('database.csv')
      .then(fields => {
        // Start the response
        let response = 'This is the list of our students\n';

        // Sort the fields alphabetically (case-insensitive)
        const sortedFields = Object.keys(fields).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

        // Add each field's details to the response
        sortedFields.forEach(field => {
          response += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
        });

        // Send the response with a 200 status
        res.status(200).send(response);
      })
      .catch(error => {
        // If the database cannot be loaded, return a 500 error
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params; // Access major from the URL parameter

    // Check if the major is valid
    if (major !== 'CS' && major !== 'SWE') {
      // If the major is not valid, return a 500 error with the appropriate message
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    // Call the readDatabase function to get the list of students
    readDatabase('database.csv')
      .then(fields => {
        // Find students with the specified major field
        const studentsInMajor = fields[major];

        // Check if the major field exists and has students
        if (!studentsInMajor) {
          return res.status(500).send('Cannot load the database');
        }

        // Send the response with the list of first names
        res.status(200).send(`List: ${studentsInMajor.join(', ')}`);
      })
      .catch(error => {
        // If the database cannot be loaded, return a 500 error
        res.status(500).send('Cannot load the database');
      });
  }
}

module.exports = StudentsController;
