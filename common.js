function print () {
  console.log(`
  This Message is from the 'common' file.
  This should be present on both branches.

  1111111111111111111111111111111111111111
  These are new changes!
  `);
}

print();

module.exports = print;