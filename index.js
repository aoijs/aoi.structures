const Binary = require('./src/binary/binary').default;

const b = new Binary(10);
b.newByte('testByte', "number", 64);
b.addByteData('testByte', 1234)

console.log({ b, getRawData: b.getRawData("testByte"), getData: b.getData('testByte') })