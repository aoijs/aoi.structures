/** @format */

export default class Leaf {
  name: string;
  data: any[];
  branch: Branch;
  constructor(name: string, branch: Branch) {
    this.name = name;
    this.branch = branch;
    this.data = [];
  }
  /**
   * @method baseSort
   * @description sorts the Data ( classic js Array.sort() )
   * @similiar Array.sort()
   * @param compareFunction function to sort
   * @return any[]
   */
  public baseSort(compareFunction: (a: number, b: number) => number): any[] {
    const sorted = this.data.sort(compareFunction);
    this.data = sorted;
    return sorted;
  }
  /**
   * @method weakSort
   * @description weakly sorts the data ( basically  Array.sort() without any compareFunction )
   * @similiar Array.sort()
   * @return any[]
   */
  public weakSort(): any[] {
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
  public quickSort(): any[] {
    const sorted = this.data.sort((a, b) => {
      if (a < b) return 1;
      else if (a > b) return -1;
      else return 0;
    });
    this.data = sorted;

    return sorted;
  }
  /**
   * @method delete
   * @description deletes itself
   * @return void
   */
  public delete(): void {
    this.branch.branches.delete(this.name);
  }
  /**
   * @method clear
   * @description clears all data
   * @similiar Map.clear()
   * @return void
   */
  public clear(): void {
    this.data = [];
  }
  /**
   * @method map
   * @description maps a function over the data and return it
   * @similiar Array.map()
   * @param func function to be looped over
   * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   * @return U[]
   */
  public map<U>(
    func: (arg: any, index: number, array: any[]) => U,
    thisArg?: any
  ): U[] {
    return this.data.map(func, thisArg);
  }
  public searchValue( value : string | number,sort  = true ) : any {
    if( sort ) {
      this.data = this.data.sort( (a,b) => {
        if( a < b ) return 1
        else if( a > b ) return -1
        else return 0
      });
    }

    
    let start = 0;
    let end = this.data.length - 1;
    let vm;

    while( start <= end ) {
      let mid = Math.floor( (start + end)/2 );
      vm = this.data[ mid ]
      if( value > vm ) start = mid + 1
      else if( value < vm ) end = mid - 1
      else break;
    }
    return vm
  }
}
