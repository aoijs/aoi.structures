export default class Leaf<K = any,V = any>  {
    name : string;
    data : Array<any> ; 
    branch : Branch;
    constructor( name : string,branch : Branch ) {
        this.name = name;
        this.branch = branch;
        this.data =  [];
    }
    /**
     * @method baseSort
     * @description sorts the Data ( classic js Array.sort() )
     * @similiar Array.sort()
     * @param compareFunction function to sort
     * @return any[]
     */
    public baseSort( compareFunction : ( a : number , b : number ) => number) : any[]  {
        const sorted = this.data.sort( compareFunction );
        this.data = sorted;

        return sorted;
    }
    /**
     * @method weakSort
     * @description weakly sorts the data ( basically  Array.sort() without any compareFunction )
     * @similiar Array.sort()
     * @return any[]
     */
    public weakSort() : any[] {
        const sorted = this.data.sort();
        this.data = sorted;
        return sorted;
    }
    /**
     * @method qiuckSort
     * @description quick sorts the data ( sorts number in increasing order, same for strings )
     * @similiar Array.sort()
     * @return any[]
     */
    public quickSort() : any[] {
        const sorted = this.data.sort( ( a,b ) => {
            if( a < b ) return 1
            else if( a > b ) return -1
            else return 0
        });
        this.data = sorted;

        return sorted;
    }
    
}