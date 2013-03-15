module.exports = process.env.TEXTII_COV
  ? require('./lib-cov/textii')
  : require('./lib/textii');

