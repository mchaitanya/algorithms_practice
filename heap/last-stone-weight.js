// https://leetcode.com/problems/last-stone-weight/
// tags - heap
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {    
    // MAX-HEAP IMPLEMENTATION
    const Heap = function(comparatorFn) {
        this._vals = []; // initialize the backing array
        this._comparatorFn = comparatorFn; // takes a parent & child value & returns a boolean based on their ordering relationship
    }

    Heap.prototype.add = function(val) {
        this._vals.push(val); // add the value at the end
        this._bubble(this._vals.length - 1, 'up'); // fix the heap order
    }

    Heap.prototype.extract = function() {
        const rootVal = this._vals.shift(); // remove the root
        const lastVal = this._vals.pop();
        if (lastVal != null) {
            this._vals.unshift(lastVal); // replace the root with the right-most node on the last level
            this._bubble(0, 'down'); // fix the heap order
        }
        return rootVal;
    }

    Heap.prototype._bubble = function(idx, dir) {
        const pdx = (dir === 'up' ? Math.floor((idx - 1)/2) : idx);
        if (pdx < 0) return;

        const ldx = 2*pdx + 1;
        const rdx = 2*pdx + 2;
        if ((ldx < this._vals.length && !this._comparatorFn(this._vals[pdx], this._vals[ldx])) || (rdx < this._vals.length && !this._comparatorFn(this._vals[pdx], this._vals[rdx]))) {
            if (rdx < this._vals.length && this._comparatorFn(this._vals[rdx], this._vals[ldx])) {
                this._swapThenRecurse(pdx, rdx, dir);
            } else if (ldx < this._vals.length) {
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
    
    
    // SOLUTION STARTS HERE
    // add stones to heap
    const heap = new Heap((p, c) => p >= c);
    for (const stone of stones) {
        heap.add(stone);
    }

    while (heap._vals.length >= 2) {
        const heaviest = heap.extract();
        const secondHeaviest = heap.extract();
        if (heaviest > secondHeaviest) {
            heap.add(heaviest - secondHeaviest);
        }
    }

    return (heap._vals.length === 0 ? 0 : heap.extract());
    
};