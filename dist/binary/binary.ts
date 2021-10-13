
type BufferData = {
    offset: number
}
class Byte {
    name: string;
    size: number;
    data: Array<string> | string | DataView;
    type: 'text' | 'number' | 'buffer';
    constructor(name: string, type: 'text' | 'number' | 'buffer', size: number) {
        this.name = name;
        this.size = size;
        this.type = type;
        this.data = type === 'text' ? [] : type === "number" ? '00' : type === "buffer" ? new DataView( new ArrayBuffer( size ) ) : [];
    }
}
export default class Binary {
    size: number;
    data: Record<string,any>;
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
    public newByte(name: string , type: 'text' | 'number' | 'buffer', size: number) {
        const newByte = new Byte(name, type, size);
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
    public addByteData(name: string, data: string | Array<string> | any, bufferMethod: BufferData) {
        const byte = this.data[name];
        if (!byte) throw new Error("Byte With Name:" + name + " Doesn't Exist!");

        const type = byte.type;
        if (typeof data !== type) throw new Error("Data Provided Is not Of Same Type");

        if (type === 'string' && typeof data === 'string') {
            byte.data = data.split('').map(x => x.charCodeAt(0).toString(2));
        }
        else if (type === 'data') {
            byte.data = Number(data).toString(2);
        }
        else {
            byte.data.setInt32(bufferMethod.offset, data);
        }
    }
}