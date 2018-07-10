const { componentExists } = require('../../helpers');

module.exports = {
  description: 'Add container',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    default: 'Form',
    validate: value => {
      if (/.+/.test(value)) {
        return componentExists(value)
          ? 'A component or container with this name already exists'
          : true;
      }

      return 'The name is required';
    },
  }, {
    type: 'confirm',
    name: 'hasStateMap',
    default: true,
    message: 'Do you want to add state map function?',
  }, {
    type: 'confirm',
    name: 'addStyles',
    default: true,
    message: 'Do you want styles?',
  }],
  actions: (data) => {
    const actions = [
      {
        type: 'add',
        path: '../src/containers/{{properCase name}}/index.tsx',
        templateFile: './container/class.tsx.hbs',
        abortOnFail: true,
      },
    ];

    if (data.addStyles) {
      actions.push({
        type: 'add',
        path: '../src/containers/{{properCase name}}/styles.scss',
        templateFile: './container/styles.scss.hbs',
        abortOnFail: true
      });
    }

    return actions;
  }
};
