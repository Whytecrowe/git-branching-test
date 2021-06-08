const print = require('./common');
const mtfPrint = require('./mtf');

function main () {
  console.log(`
  APP HAS LAUNCHED!
  `);
  print();
  mtfPrint();
}

main();
