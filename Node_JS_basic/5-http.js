const http = require('http');
const fs = require('fs');

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
    console.error('Error reading the file:', err);
    return 'Error reading the file.';
  }
};

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const dataPath = process.argv[2];
    if (!dataPath) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('database not found');
      return;
    }
    const students = await countStudents(dataPath);
    res.end(`This is the list of our students\n${students}`);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Invalid request');
  }
});

app.listen(1245);

module.exports = app;
