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
      'units',
    ]),
  },
  {
    title: 'Commands',
    collapsable: false,
    children: prefix('/commands', [
      '',
    ]),
  }
]

function prefix(prefix, children) {
  return children.map(child => `${prefix}/${child}`)
}