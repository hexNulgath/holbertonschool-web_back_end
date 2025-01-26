const { once } = require('node:events');
const { createReadStream } = require('node:fs');
const { createInterface } = require('node:readline');

(async function processLineByLine() {
  try {
    const rl = createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    console.log('Welcome to Holberton School, what is your name?');
    rl.on('line', (line) => {
      process.stdout.write(`Your name is: ${line}\r`);

    });

    await once(rl, 'close');

    console.log('\nThis important software is now closing');
  } catch (err) {
    console.error(err);
  }
})();
