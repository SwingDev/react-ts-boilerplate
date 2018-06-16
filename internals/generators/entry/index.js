const lodash = require('lodash');

const DEFAULTS = {
  title: 'New Project',
  description: 'Awesome project in TypeScript and React'
}

module.exports = {
  description: 'Basic informations of your project',
  prompts: [{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project',
    default: DEFAULTS.title
  }, {
    type: 'input',
    name: 'description',
    message: 'What is the description of your project',
    default: DEFAULTS.description
  }, {
    type: 'input',
    name: 'name',
    message: 'What is the name of your project',
    default: lodash.kebabCase(DEFAULTS.title)
  }],
  actions: () => {
    return [{
      type: 'modify',
      path: '../package.json',
      pattern: /react\-ts\-boilerplate/g,
      template: '{{name}}'
    }, {
      type: 'modify',
      path: '../package.json',
      pattern: /"description":\s"(.*?)"/g,
      template: '"description": "{{description}}"'
    }, {
      type: 'add',
      path: '../README.md',
      templateFile: './generators/entry/README.md.hbs',
      force: true
    }];
  }
}
