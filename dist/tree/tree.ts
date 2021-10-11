import *  as Branch from './branch.ts';

export default class Tree {
    name : string; 
    age : number;
    branches : Map<K,V>;
    constructor( name : string , age = Infinity ) {
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
    public addBranch( name : string , size = Infinity ) : Branch {
        const newBranch : Branch = new Branch( name,size,this );

        this.branches.set( name,newBranch );
        return newBranch;
    }
}
