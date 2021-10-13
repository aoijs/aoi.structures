"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Byte {
    constructor(name, type, size) {
        this.name = name;
        this.size = size;
        this.type = type;
        this.data = type === 'string' ? [] : type === "number" ? ['00'] : [];
    }
}
exports.default = Byte;
//# sourceMappingURL=byte.js.map