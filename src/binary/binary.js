"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Binary = void 0;
const byte_1 = require("./byte");
class Binary {
    constructor(size = Infinity) {
        this.size = size;
        this.data = {};
    }
    /**
     * @method newByte
     * @description creates A new Byte data
     * @param name name of the Byte
     * @param type type of the Byte
     * @param size size of the Byte
     * @return Byte
     */
    newByte(name, type, size) {
        const newByte = new byte_1.Byte(name, type, size);
        this.data[name] = newByte;
        return newByte;
    }
    /**
     * @method addByteData
     * @description adds data to that byte
     * @param name name of the byte
     * @param data
     * @return data
     */
    addByteData(name, data) {
        const byte = this.data[name];
        //  if (!byte) throw new Error("Byte With Name:" + name + " Doesn't Exist!");
        const type = byte.type;
        if (type === 'string' && typeof data === 'string') {
            byte.data = data.split('').map(x => x.charCodeAt(0).toString(2));
        }
        else if (type === 'number') {
            byte.data = [Number(data).toString(2)];
        }
    }
    /**
     * getRawData
     */
    getRawData(name) {
        const { data, type } = this.data[name];
        if (type === 'string')
            return data;
        else
            return data[0];
    }
    /**
     * getData
     */
    getData(name) {
        const byte = this.data[name];
        const type = byte.type;
        if (type === 'string') {
            return byte.data.map(bin => String.fromCharCode(parseInt(bin, 2))).join("");
        }
        else
            return parseInt(byte.data[0], 2);
    }
}
exports.Binary = Binary;
//# sourceMappingURL=binary.js.map