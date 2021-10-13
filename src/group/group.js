"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Group extends Map {
    /**
     * @method find
     * @similiar Array.find
     * @param func Function to be passed for finding the value.
     * @return V
     */
    find(func) {
        return this.allValues().find(func);
    }
    /**
     * @method filterArray
     * @similiar Array.filter()
     * @param func Function to be passed for filtering data.
     * @return V[]
     */
    filterArray(func) {
        return this.allValues().filter(func);
    }
    /**
     * @method allValues
     * @return V[]    */
    allValues() {
        return [...this.values()];
    }
    /**
     * @method allKeys
     * @return K[]
     */
    allKeys() {
        return [...this.keys()];
    }
    /**
     * @method sortViaKeys
     * @description sorts the group via key
     * @similiar Array.sort() ( for string typed keys && any typed keys) and Array.sort((a,b) => a-b) (for number typed keys)
     * @return Group
     */
    sortViaKeys() {
        const entries = [...this.entries()];
        if (entries.every(x => typeof x[0] === 'string')) {
            return new Group(entries.sort());
        }
        else if (entries.every(x => typeof x[0] === number)) {
            return new Group(entries.sort((a, b) => a[0] - b[0]));
        }
        else {
            return new Group(entries.sort());
        }
    }
    /**
     * @method weakSort
     * @description sorts the Group via Js Sort method //
     * @similiar Array.sort()
     * @return Group
     */
    weakSort() {
        return new Group([...this.entries()].sort());
    }
    /**
     * @method filter
     * @description filters the Group
     * @similiar Array.filter
     * @param func Function for filtering the Group
     * @return Group
     */
    filter(func) {
        const g = new Group();
        for (const [key, value] of this) {
            if (func(value, key, this))
                g.set(key, value);
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
    top(number = 1) {
        const arr = this.allValues().slice(0, number);
        return arr.length === 1 ? arr[0] : arr;
    }
    /**
     * @method sort
     * @description sorts the Group  using its Value
     * @similiar Array.sort()
     * @param compareFunction Function to sort
     * @return Group
     */
    sort(compareFunction) {
        const entries = [...this.entries()];
        const sorted = entries.sort((a, b) => compare(a[1], b[1]));
        return new Group(sorted);
    }
    /**
     * @method object
     * @description returns Group as an Object
     * @similiar Object
     * @return Object
     */
    object() {
        const obj = {};
        for (const [key, value] of this) {
            obj[key] = value;
        }
        return obj;
    }
    /**
     * @method bottom
     * @description returns the last Value of Group
     * @similiar Array[ Array.length - 1 ] | Array.slice(-number)
     * @param number number of values to be returned
     * @return V | V[]
     */
    bottom(number = 1) {
        const arr = this.allValues().slice(-number);
        return arr.length === 1 ? arr[0] : arr;
    }
    /**
     * @method topKey
     * @description returns the (first Key/Arrays of first n keys) of Group
     * @similiar Array[ 0 ] | Array.slice( 0,number )
     * @param number how many top keys to be returned
     * @return K | K[]
     */
    topKey(number = 1) {
        const arr = this.allKeys().slice(0, number);
        return arr.length === 1 ? arr[0] : arr;
    }
    /**
     * @method bottomKey
     * @description returns the last key of Group
     * @similiar Array[ Array.length - 1 ] | Array.slice(-number)
     * @param number number of key to be returned
     * @return K | K[]
     */
    bottomKey(number = 1) {
        const arr = this.allKeys().slice(-number);
        return arr.length === 1 ? arr[0] : arr;
    }
    /**
     * @method random
     * @description returns a random value / array of random values
     * @param number number of random values to be returned
     * @return V | V[]
     */
    random(number = 1) {
        const vals = this.allValues();
        if (number === 1) {
            const random = Math.floor(Math.random() * vals.length - 1);
            return vals[random];
        }
        else {
            const res = [];
            for (number; number > 0; number--) {
                const random = Math.floor(Math.random() * vals.length - 1);
                res.push(vals[random]);
            }
            return res;
        }
    }
    /**
     * @method randomKey
     * @description returns a random key / array of random keys
     * @param number number of random keys to be returned
     * @return K | K[]
     */
    randomKey(number = 1) {
        const vals = this.allKeys();
        if (number === 1) {
            const random = Math.floor(Math.random() * vals.length - 1);
            return vals[random];
        }
        else {
            const res = [];
            for (number; number > 0; number--) {
                const random = Math.floor(Math.random() * vals.length - 1);
                res.push(vals[random]);
            }
            return res;
        }
    }
    /**
     * @method getByPosition
     * @description get Value by its position in Group
     * @similiar Array[ n - 1 ]
     * @param position position of Value tp be returned
     * @return V
     */
    getByPosition(position) {
        return this.allValues()[position - 1];
    }
    /**
     * @method break
     * @description divides and return Group into 2 different Groups according to the Function Provided
     * @param func function according to which Group is to breaked into
     * @return [ trueGroup,falseGroup]
     */
    break(func) {
        const trueGrp = new Group();
        const falseGrp = new Group();
        for (const [key, value] of this) {
            if (func(value, key, this))
                trueGrp.set(key, value);
            else
                falseGrp.set(key, value);
        }
        return [trueGrp, falseGrp];
    }
    /**
     * @method reverse
     * @description returns the Group in reversed order
     * @similiar Array.reverse()
     * @return Group<K,V>
     */
    reverse() {
        const entries = [...this.entries()];
        return new Group(entries.reverse());
    }
    /**
     * @method concat
     * @description concats provided array of Groups
     * @similiar Array.concat
     * @param grps Array of Group
     * @return Group<any,any>
     */
    concat(...grps) {
        const res = grps.map(x => [...x.entries()]);
        return new Group(res);
    }
    /**
     * @method some
     * @description whether Group fulfill the given condition
     * @similiar Array.some()
     * @param func condition to check
     * @return boolean
     */
    some(func) {
        return this.allValues().some(func);
    }
    /**
     * @method every
     * @description whether Group fulfill the given condition
     * @similiar Array.every()
     * @param func condition to check
     * @return boolean
     */
    every(func) {
        return this.allValues().every(func);
    }
    /**
     * @method someKey
     * @description whether Group fulfill the given condition
     * @similiar Array.some()
     * @param func condition to check
     * @return boolean
     */
    someKey(func) {
        return this.allKeys().some(func);
    }
    /**
     * @method everyKey
     * @description whether Group fulfill the given condition
     * @similiar Array.every()
     * @param func condition to check
     * @return boolean
     */
    everyKey(func) {
        return this.allKeys().every(func);
    }
    /**
     * @method remove
     * @description removes the key-value pairs that fulfill the provided condition
     * @param func condition thats need to be true for a key-value pair to be removed
     * @return data removed size
     */
    remove(func) {
        const oldSize = this.size;
        for (const [key, value] of this) {
            if (value, key, this)
                this.delete(key);
        }
        return (this.size - oldSize);
    }
    /**
     * @method toJSON
     * @description returns Group as JSON
     * @similiar JSON.stringify()
     * @param replacer same as JSON.stringify
     * @param space same as JSON.stringify
     * @return string
     */
    toJSON(replacer, space = 2) {
        return JSON.stringify(this.object(), replacer || null, space);
    }
    /**
     * @method binarySearch
     * @description searchs for a Value via Binary search
     * @similiar BinarySearch
     * @param value value to be searched
     * @param valueProp property to be searched in
     * @param sort whether to sort the Group before Searching
     * @return V | void
     */
    binarySearch(value, valueProp, sort = true) {
        if (sort) {
            const vals = this.allValues.sort((a, b) => {
                if (a < b)
                    return 1;
                else if (a > b)
                    return -1;
                else
                    return 0;
            });
        }
        const fn = (search) => {
            let found = false;
            let start = 0;
            let end = vals.length - 1;
            let val;
            while (start <= end) {
                const mid = Math.floor((start + end) / 2);
                const vm = eval(valueProp ? `vals[ mid ]?.${valueProp}` : vals[mid]);
                if (search > vm)
                    start = mid + 1;
                else if (search < vm)
                    end = mid - 1;
                else
                    found = true;
                if (found) {
                    break;
                    val = vals[mid];
                }
                ;
            }
            return val;
        };
        return fn(v);
    }
    /**
     * @method clone
     * @description clones a Group
     * @param grp : Group to be cloned
     * @return Group
    */
    clone(grp) {
        return new Group(grp);
    }
}
exports.default = Group;
//# sourceMappingURL=group.js.map