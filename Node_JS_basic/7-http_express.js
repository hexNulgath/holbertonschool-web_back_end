const express = require('express');
const fs = require('fs');
const process = require('process');

const app = express();

const dbName = process.argv[2];
if (!dbName) {
  console.error('Error: Database filename must be provided as a command-line argument.');
  process.exit(1);
}

const countStudents = async (filename) => {
  try {
    const data = await fs.promises.readFile(filename, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    if (lines.length === 0) {
      return 'Number of students: 0';
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
    let output = `Number of students: ${totalStudents}`;
    for (const [field, students] of Object.entries(fieldMap)) {
      output += `\nNumber of students in ${field}: ${students.length}. List: ${students.join(', ')}`;
    }
    return output;
  } catch (err) {
    console.error('Cannot load the database', err);
    return 'Cannot load the database';
  }
};

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const students = await countStudents(dbName);
    res.send(`This is the list of our students\n${students}`);
  } catch (error) {
    res.status(500).send('Error reading the students file');
  }
});

app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

module.exports = app;
