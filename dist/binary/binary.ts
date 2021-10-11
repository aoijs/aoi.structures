type ByteData = Array<any> | string | BinaryData

class Byte {
    name: string;
    size: number;
    data: Array<string> | String<number> | DataView<ArrayBuffer>;
    type: 'text' | 'number' | 'buffer';
    constructor(name: string, type: 'text' | 'number' | 'buffer', size: number) {
        this.name = name;
        this.size = size;
        this.type = type;
        this.data = type === 'text' ? [] : type === "number" ? (00) : type === "buffer" ? new DataView(new ArrayBuffer(size)) : undefined;
    }
}
export default class Binary {
    size: number;
    data: ByteData;
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
    public newByte(name: string, type: 'text' | 'number' | 'buffer', size: number) {
        const newByte = new Byte(name, type, size);
        this.data[name] = newByte;
        return newByte;
    }
    /**
     * @method addByteData
     */
    public addByteData(name: string, data: any) {
        const byte = this.data[name];
        if (!byte) throw new Error("Byte With Name:" + name + " Doesn't Exist!");

        const type = byte.type;
        if (typeof data !== type) throw new Error("Data Provided Is not Od Same Type");

    }
}