// https://leetcode.com/problems/kth-largest-element-in-an-array/
// tags - heap
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const heap = new Heap((p, c) => p <= c); // min heap
    for (let n of nums) {
        if (heap.vals.length < k) {
            heap.add(n);
        } else if (n > heap.vals[0]) {
            heap.extract();
            heap.add(n);
        }
    }
    return heap.vals[0];
};

class Heap {
    constructor(comparatorFn) {
        this.vals = [];
        this.cmpFn = comparatorFn;
    }
    
    add(val) {
        this.vals.push(val);
        this.bubble(this.vals.length-1, 'up');
    }
    
    extract() {
        const rootVal = this.vals.shift();
        const lastVal = this.vals.pop();
        if (lastVal != null) {
            this.vals.unshift(lastVal);
            this.bubble(0, 'down');
        }
        return rootVal;
    }
    
    bubble(ix, dir) {
        const px = (dir === 'down' ? ix: Math.floor((ix-1)/2));
        const pval = this.vals[px];
        if (px < 0) return;
        
        const len = this.vals.length;
        const lx = 2*px + 1, lval = this.vals[lx];
        const rx = 2*px + 2, rval = this.vals[rx];
        if ((lx < len && !this.cmpFn(pval, lval)) || (rx < len && !this.cmpFn(pval, rval))) {
            if (rx < len && this.cmpFn(rval, lval)) {
                this.swapThenRecurse(px, rx, dir);
            } else if (lx < len) {
                this.swapThenRecurse(px, lx, dir);
            }
        }
    }
    
    swapThenRecurse(px, cx, dir) {
        [this.vals[px], this.vals[cx]] = [this.vals[cx], this.vals[px]];
        const nextIdx = (dir === 'up' ? px : cx);
        this.bubble(nextIdx, dir);
    }
    
}
