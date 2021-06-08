function print () {
  console.log(`
  This Message is from the 'common' file.
  This should be present on both branches.
  `);
}

print();

module.exports = print;