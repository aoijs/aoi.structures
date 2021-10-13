"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const branch_1 = require("./branch");
class Tree {
    constructor(name, age = Infinity) {
        this.name = name;
        this.age = age;
        this.branches = new Map();
    }
    /**
     * @method addBranch
     * @description adds a Branch in the Tree
     * @param name name of the Branch
     * @param size size of the Branch
     * @return Branch
     */
    addBranch(name, size = Infinity) {
        const newBranch = new branch_1.default(name, this);
        this.branches.set(name, newBranch);
        return newBranch;
    }
}
exports.default = Tree;
//# sourceMappingURL=tree.js.map