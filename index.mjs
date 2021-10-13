import Group from './dist/group/group';

const grp = new Group()
grp.set('hi', 'lol')
grp.set('ok', 'yeah')
grp.set('bye', 'asf')

console.log({ grp, sort: grp.weakSort() })