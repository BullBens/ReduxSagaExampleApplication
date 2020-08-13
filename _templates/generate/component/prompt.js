module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'Enter component name...',
  },
  {
    type: 'select',
    name: 'folder',
    message: 'Select component folder...',
    choices: ['behavior', 'control', 'dataview', 'layout', 'typography', 'navigation', 'container'],
  },
];