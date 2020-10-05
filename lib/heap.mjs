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
    // add the value at the end
    this._values.push(value);
    // fix the heap order
    this._bubbleUp(this._values.length - 1);
}

Heap.prototype.extract = function() {
    // remove the root
    const rootValue = this._values.shift();
    // replace the root with the right-most node on the last level
    this._values.unshift(this._values.pop());
    // fix the heap order
    this._bubbleDown(0);

    return rootValue;
}

Heap.prototype._bubbleUp = function(nodeIdx) {
    const pdx = Math.floor((nodeIdx - 1)/2);
    if (pdx < 0) return;

    const ldx = 2*pdx + 1;
    const rdx = 2*pdx + 2;
    if ((ldx < this._values.length && this._values[pdx] > this._values[ldx]) || (rdx < this._values.length && this._values[pdx] > this._values[rdx])) {
        if (rdx < this._values.length && this._values[rdx] < this._values[ldx]) {
            this._swap(pdx, rdx);
            this._bubbleUp(pdx);
        } else if (ldx < this._values.length) {
            this._swap(pdx, ldx);
            this._bubbleUp(pdx);
        }
    }

}

Heap.prototype._bubbleDown = function(pdx) {
    const ldx = 2*pdx + 1;
    const rdx = 2*pdx + 2;
    if ((ldx < this._values.length && this._values[pdx] > this._values[ldx]) || (rdx < this._values.length && this._values[pdx] > this._values[rdx])) {
        if (rdx < this._values.length && this._values[rdx] < this._values[ldx]) {
            this._swap(pdx, rdx);
            this._bubbleDown(rdx);
        } else if (ldx < this._values.length) {
            this._swap(pdx, ldx);
            this._bubbleDown(ldx);
        }
    }
}

Heap.prototype._swap = function(idx1, idx2) {
    const temp = this._values[idx1];
    this._values[idx1] = this._values[idx2];
    this._values[idx2] = temp;
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
