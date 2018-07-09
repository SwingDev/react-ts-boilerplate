const componentGenerator = require('./generators/component');

module.exports = (plop) => {
  plop.setGenerator('component', componentGenerator);
};
