// stripped-down heap implementation - pass appropriate comparator to use as max/min heap
// Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.

// to check if the heap is empty/ peek at the root value etc.
// directly access the `_values` array
export const Heap = function(comparatorFn) {
    this._vals = []; // initialize the backing array
    this._cmpFn = comparatorFn; // takes a parent & child value & returns a boolean based on their ordering relationship
}

Heap.prototype.add = function(val) {
    this._vals.push(val); // add the value at the end
    this._bubble(this._vals.length - 1, 'up'); // fix the heap order
}

Heap.prototype.extract = function() {
    const rootVal = this._vals.shift(); // remove the root
    const lastVal = this._vals.pop(); // the heap may be empty at this point
    if (lastVal != null) {
        this._vals.unshift(lastVal); // replace the root with the right-most node on the last level
        this._bubble(0, 'down'); // fix the heap order
    }
    return rootVal;
}

Heap.prototype._bubble = function(idx, dir) {
    const pdx = (dir === 'up' ? Math.floor((idx - 1)/2) : idx);
    const pval = this._vals[pdx];
    if (pdx < 0) return;

    const len = this._vals.length;
    const ldx = 2*pdx + 1, lval = this._vals[ldx];
    const rdx = 2*pdx + 2, rval = this._vals[rdx];
    if ((ldx < len && !this._cmpFn(pval, lval)) || (rdx < len && !this._cmpFn(pval, rval))) {
        if (rdx < len && this._cmpFn(rval, lval)) {
            this._swapThenRecurse(pdx, rdx, dir);
        } else if (ldx < len) {
            this._swapThenRecurse(pdx, ldx, dir);
        }
    }

}

Heap.prototype._swapThenRecurse = function(pdx, cdx, dir) {
    const temp = this._vals[pdx];
    this._vals[pdx] = this._vals[cdx];
    this._vals[cdx] = temp;

    const nextIdx = (dir === 'up' ? pdx : cdx);
    this._bubble(nextIdx, dir);

}


// // test out the heap
// const heap = new Heap((p, c) => p >= c);
// heap.add(20);
// console.log(heap._vals);
// heap.add(6);
// console.log(heap._vals);
// heap.add(12);
// console.log(heap._vals);

// heap.add(4);
// console.log(heap._vals);
// console.log(heap.extract());
// console.log(heap._vals);

// heap.add(2);
// console.log(heap._vals);
// heap.add(35);
// console.log(heap._vals);

// const stones = [3, 7, 8];
// const heap = new Heap((p, c) => p >= c);
// for (const stone of stones) {
//     heap.add(stone);
// }

// console.log(heap._vals);
// while (heap._vals.length >= 2) {
//     const heaviest = heap.extract();
//     console.log(heap._vals);
//     const secondHeaviest = heap.extract();
//     console.log(heap._vals);

//     if (heaviest > secondHeaviest) {
//         heap.add(heaviest - secondHeaviest);
//         console.log(heap._vals);
//     }

// }

// console.log((heap._vals.length === 0 ? 0 : heap.extract()));
