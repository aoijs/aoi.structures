

export default class Group<K = any, V = any> extends Map<K, V> {
    /**
     * @method find
     * @similiar Array.find
     * @param func Function to be passed for finding the value.
     * @return V  
     */
    public find(func: (value: V, key: K, grp:this) => boolean): V {
        return this.allValues().find(func);
    }
    /**
     * @method filterArray 
     * @similiar Array.filter()
     * @param func Function to be passed for filtering data.
     * @return V[]
     */
    public filterArray(func: (value: V) => boolean): V[] {
        return this.allValues().filter(func);
    }
    /**
     * @method allValues
     * @return V[]    */
    public allValues(): V[] {
        return [...this.values()];
    }
    /**
     * @method allKeys
     * @return K[]
     */
    public allKeys(): K[] {
        return [...this.keys()];
    }
    /**
     * @method sortViaKeys 
     * @description sorts the group via key
     * @similiar Array.sort() ( for string typed keys && any typed keys) and Array.sort((a,b) => a-b) (for number typed keys)
     * @return Group
     */
    public sortViaKeys() : Group<K,V> {
        const entries = [...this.entries()];
        if(entries.every( x => typeof x[0] === 'string' )) {
            return new Group( entries.sort() );
        }
        else if( entries.every( x => typeof x[ 0 ] === number) ) {
            return new Group( entries.sort( ( a,b ) => a[ 0 ] - b[ 0 ] ) );
        }
        else {
            return new Group( entries.sort() );
        }
    }
    /**
     * @method weakSort
     * @description sorts the Group via Js Sort method //
     * @similiar Array.sort()
     * @return Group
     */
    public weakSort() : Group<K,V> {
        return new Group([...this.entries()].sort());
    }
    /**
     * @method filter
     * @description filters the Group
     * @similiar Array.filter
     * @param func Function for filtering the Group
     * @return Group
     */
    public filter( func : ( value : V ,key :K ,grp : this ) => booelean ) : Group<any,any> {
        const g = new Group();
        for( const [ key,value ] of this ) {
            if( func( value,key,this ) ) g.set( key,value )
        }
        return g;
    }
    /**
     * @method top
     * @description returns the first value of Group
     * @similiar Array[ 0 ] | Array.slice( 0,number )
     * @param number how many top values to be returned
     * @return V | V[]
     */
    public top( number = 1 ) {
        const arr = this.allValues().slice(0,number);
        return arr.length === 1 ? arr[ 0 ] : arr
    }
    /**
     * sort
     */
    public sort(  )  {
        
    }
}