const readline = require('readline');

const askQuestion = (query) => {
  const userInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    userInput.question(query, (answer) => {
      resolve(answer);
      userInput.close();
    });
  });
};

const main = async () => {
  console.log('Welcome to Holberton School, what is your name?');
  const name = await askQuestion('');
  console.log(`Your name is: ${name}`);
  console.log('This important software is now closing');
};

main();
