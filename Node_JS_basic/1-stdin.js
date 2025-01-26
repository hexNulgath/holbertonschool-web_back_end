const readline = require('readline');

const userInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

userInput.question('Welcome to Holberton School, what is your name?\n', (name) => {
  // Use process.stdin.isTTY to distinguish between interactive and piped input
  if (process.stdin.isTTY) {
    // Interactive input (Test 1)
    process.stdout.write(`Your name is: ${name}\r`);
  } else {
    // Piped input (Test 2)
    console.log(`Your name is: ${name}`);
  }
  userInput.close();
});

userInput.on('close', () => {
  console.log('This important software is now closing');
});
