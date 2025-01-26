const readline = require('readline');

const userInput = readline.createInterface({
 input: process.stdin,
 output: process.stdout,
});

userInput.question('Welcome to Holberton School, what is your name?\n', (name) => {
  console.log(`Your name is: ${name}\r`); 
  userInput.close();
});

userInput.on('close', () => {
  console.log('This important software is now closing');
  process.exit();
});
