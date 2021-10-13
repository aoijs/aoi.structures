const IndexData = require('./src/indexed/indexMap.js').default;

const id = new IndexData('Hello World!')
id.add('t');
id.set('q',[4,6,7]);
console.log({ id,string: id.toString() })