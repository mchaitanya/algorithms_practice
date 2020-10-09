// https://leetcode.com/problems/kth-largest-element-in-an-array/
// tags - heap
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    // can be solved with a min-heap of size k
    // HEAP IMPLEMENTATION
    const Heap = function() {
        this.vals = [];
        this.cmp = (p, c) => p <= c;
    }
    
    Heap.prototype.add = function(val) {
        this.vals.push(val);
        this.bubble(this.vals.length - 1, 'up');
    }
    
    Heap.prototype.extract = function() {
        const rootVal = this.vals.shift();
        const lastVal = this.vals.pop();
        if (lastVal != null) {
            this.vals.unshift(lastVal);
            this.bubble(0, 'down');
        }
        return rootVal;
    }
    
    Heap.prototype.bubble = function(idx, dir) {
        const pdx = (dir === 'down' ? idx : Math.floor((idx - 1)/2));
        const pval = this.vals[pdx];
        if (pdx < 0) return;
        
        const len = this.vals.length;
        const ldx = 2*pdx + 1, lval = this.vals[ldx];
        const rdx = 2*pdx + 2, rval = this.vals[rdx];
        
        if ((ldx < len && !this.cmp(pval, lval)) || (rdx < len && !this.cmp(pval, rval))) {
            if (rdx < len && this.cmp(rval, lval)) {
                this.swapThenRecurse(pdx, rdx, dir);
            } else if (ldx < len) {
                this.swapThenRecurse(pdx, ldx, dir);
            }
        }
    }
    
    Heap.prototype.swapThenRecurse = function(pdx, cdx, dir) {
        const temp = this.vals[pdx];
        this.vals[pdx] = this.vals[cdx];
        this.vals[cdx] = temp;
        
        const nextIdx = (dir === 'up' ? pdx : cdx);
        this.bubble(nextIdx, dir);
    }
    
    // SOLUTION STARTS HERE
    const minHeap = new Heap();
    for (let num of nums) {
        if (minHeap.vals.length < k) {
            minHeap.add(num);
        } else if (num > minHeap.vals[0]) {
            minHeap.extract();
            minHeap.add(num);
        }
    }
    
    return minHeap.vals[0];
    
};