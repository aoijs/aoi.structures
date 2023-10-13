export function valueOf(data: any) {
    return data.valueOf ? data.valueOf() : Object.prototype.valueOf.call(data);
}

function isEqual(a: any, b: any):boolean {
    if (a === b) return true;

    if (a == null || b == null) return false;

    if (Array.isArray(a)) {
        return (
            Array.isArray(b) &&
            a.length === b.length &&
            a.every((item, index) => isEqual(item, b[index]))
        );
    }

    if (typeof a === "object" || typeof b === "object") {
        var aValue = valueOf(a);
        var bValue = valueOf(b);

        if (aValue !== a || bValue !== b) isEqual(aValue, bValue);

        return Object.keys(Object.assign({}, a, b)).every((key) =>
            isEqual(a[key], b[key]),
        );
    }

    return false;
}

export default isEqual;
