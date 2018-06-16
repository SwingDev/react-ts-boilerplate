const fs = require('fs');
const path = require('path');

const entryGenerator = require('./generators/entry');

module.exports = (plop) => {
  plop.setGenerator('entry', entryGenerator);
};
