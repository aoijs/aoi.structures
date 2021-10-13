
type BufferData = {
    offset: number
}
class Byte {
    name: string;
    size: number;
    data:   Array<string>  ;
    type: 'string' | 'number' ;
    constructor(name: string, type: 'string' | 'number' , size: number) {
        this.name = name;
        this.size = size;
        this.type = type;
        this.data = type === 'string' ? [] : type === "number" ? ['00'] : [];
    }
}
export default class Binary {
    size: number;
    data: Record<string,Byte>;
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
    public newByte(name: string , type: 'string' | 'number' , size: number) {
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
    public addByteData(name: string, data: string | number, bufferMethod: BufferData) {
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
    public getRawData(name : string) {
        const { data,type } = this.data[ name ];
        if( type === 'string' ) return data;
        else return data[ 0 ];
    }
    /**
     * getData
     */
    public getData(name : string) {
        const byte = this.data[ name ];
        const type = byte.type;
        if( type === 'string' ) {
            return byte.data.map(bin => String.fromCharCode(parseInt(bin, 2))).join("")
        }
        else return parseInt(byte.data[ 0 ],2);
    }
}