const reduxActions = [{}];

module.exports = {
  description: 'State management',
  prompts: [{
    type: 'list',
    name: 'library',
    message: 'Select state management library',
    default: 'Redux',
    choices: () => ['Redux', 'Other'],
  }],
  actions: (data) => {
    const actions = [];

    switch (data.library) {
      case 'Redux':
        actions.push(...reduxActions);
        break;

      default:
        break;
    }

    return actions;
  }
};
