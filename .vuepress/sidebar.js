module.exports = [
  {
    title: 'Getting Started',
    collapsable: false,
    children: [
      '/'
    ],
  },
  {
    title: 'Basics',
    collapsable: false,
    children: prefix('/basics', [
      '',
      'installation',
      'units',
    ]),
  },
  {
    title: 'Commands',
    collapsable: false,
    children: prefix('/commands', [
      '',
      'create-unit',
      'delete-unit',
      'make-controller',
      'make-model',
      'make-migration'
    ]),
  }
]

function prefix(prefix, children) {
  return children.map(child => `${prefix}/${child}`)
}