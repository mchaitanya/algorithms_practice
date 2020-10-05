// stripped-down min-heap implementation - adjust appropriately for a max-heap
// values managed in the heap are numbers that can be compared with <, >, = operators

// Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.

export const Heap = function() {
    // initialize the backing array
    this._values = [];
    // to check if the heap is empty/ peek at the root value etc.
    // directly access the `_values` array
}

Heap.prototype.add = function(value) {
    this._values.push(value); // add the value at the end
    this._bubble(this._values.length - 1, 'up'); // fix the heap order
}

Heap.prototype.extract = function() {
    const rootValue = this._values.shift(); // remove the root
    this._values.unshift(this._values.pop()); // replace the root with the right-most node on the last level
    this._bubble(0, 'down'); // fix the heap order
    return rootValue;
}

Heap.prototype._bubble = function(idx, dir) {
    const pdx = (dir === 'up' ? Math.floor((idx - 1)/2) : idx);
    if (pdx < 0) return;

    const ldx = 2*pdx + 1;
    const rdx = 2*pdx + 2;
    if ((ldx < this._values.length && this._values[pdx] > this._values[ldx]) || (rdx < this._values.length && this._values[pdx] > this._values[rdx])) {
        if (rdx < this._values.length && this._values[rdx] < this._values[ldx]) {
            this._swapThenRecurse(pdx, rdx, dir);
        } else if (ldx < this._values.length) {
            this._swapThenRecurse(pdx, ldx, dir);
        }
    }

}

Heap.prototype._swapThenRecurse = function(pdx, cdx, dir) {
    const temp = this._values[pdx];
    this._values[pdx] = this._values[cdx];
    this._values[cdx] = temp;

    const nextIdx = (dir === 'up' ? pdx : cdx);
    this._bubble(nextIdx, dir);

}


// test out the min-heap
const heap = new Heap();
heap.add(20);
console.log(heap._values);
heap.add(6);
console.log(heap._values);
heap.add(12);
console.log(heap._values);

heap.add(4);
console.log(heap._values);
console.log(heap.extract());
console.log(heap._values);

heap.add(2);
console.log(heap._values);
heap.add(35);
console.log(heap._values);
