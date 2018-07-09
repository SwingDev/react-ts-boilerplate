const { componentExists } = require('../../helpers');

const TYPE = {
  stateless: 'React.SFC',
  classy: 'React.Component'
};

const getTemplate = (type) => {
  switch (type) {
    case TYPE.stateless:
      return './component/stateless.js.hbs'

    default:
      return './component/class.js.hbs'
  }
}

module.exports = {
  description: 'Add component',
  prompts: [{
    type: 'list',
    name: 'type',
    message: 'Select the type of component',
    default: TYPE.stateless,
    choices: () => [
      TYPE.stateless,
      TYPE.classy
    ],
  }, {
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    default: 'Button',
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
    name: 'addStyles',
    default: true,
    message: 'Do you want styles?',
  }],
  actions: (data) => {
    const template = getTemplate(data.type);

    const actions = [
      {
        type: 'add',
        path: '../src/components/{{properCase name}}/index.tsx',
        templateFile: template,
        abortOnFail: true,
      },
    ];

    if (data.addStyles) {
      actions.push({
        type: 'add',
        path: '../src/components/{{properCase name}}/styles.scss',
        templateFile: './component/styles.scss.hbs',
        abortOnFail: true
      });
    }

    return actions;
  }
};
