const Group = require('./src/group/group.js').default;

const grp = new Group()
grp.set(Map, Object)
grp.set('ok', 'yeah')
grp.set('bye', 'asf')

console.log({grp,weakSort: grp.weakSort().allValues(),json: grp.toJSON() })