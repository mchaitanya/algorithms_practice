// https://leetcode.com/problems/top-k-frequent-elements/
// tags - heap, sorting
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // count the occurences
    const countsMap = new Map();
    for (const num of nums) {
        const count = countsMap.get(num) || 0;
        countsMap.set(num, count + 1);
    }
    
    const countsArray = Array.from(countsMap.entries());
    
//     // sort by frequency, pick top k - that should be O(nlogn)
//     // each entry is a tuple of the form [num, count]
//     // sort the array in place
//     countsArray.sort((entry1, entry2) => entry2[1] - entry1[1]);
//     return countsArray.slice(0, k).map(entry => entry[0]);
    
    // create a min-heap of size k - then it'll be O(nlogk)
    // the root represents the the element with the smallest count seen so far
    // if the next element has a higher count, remove the root and add this element into the heap
    // HEAP IMPLEMENTATION
    const MinHeap = function() {
        this.vals = [];
        this.cmp = (p, c) => p[1] <= c[1];
    }
    
    MinHeap.prototype.add = function(val) {
        this.vals.push(val);
        this.bubble(this.vals.length - 1, 'up');
    }
    
    MinHeap.prototype.extract = function() {
        const rootVal = this.vals.shift();
        const lastVal = this.vals.pop();
        if (lastVal != null) {
            this.vals.unshift(lastVal);
            this.bubble(0, 'down');
        }
        return rootVal;
    }
    
    MinHeap.prototype.bubble = function(idx, dir) {
        const pdx = (dir === 'down' ? idx : Math.floor((idx - 1)/2));
        if (pdx < 0) return;
        
        const ldx = 2*pdx + 1;
        const rdx = 2*pdx + 2;
        if ((ldx < this.vals.length && !this.cmp(this.vals[pdx], this.vals[ldx])) || (rdx < this.vals.length && !this.cmp(this.vals[pdx], this.vals[rdx]))) {
            if ((rdx < this.vals.length && this.cmp(this.vals[rdx], this.vals[ldx]))) {
                this.swapThenRecurse(pdx, rdx, dir);
            } else {
                this.swapThenRecurse(pdx, ldx, dir);
            }
        }
    }
    
    MinHeap.prototype.swapThenRecurse = function(pdx, cdx, dir) {
        const temp = this.vals[pdx];
        this.vals[pdx] = this.vals[cdx];
        this.vals[cdx] = temp;
        
        const nextIdx = (dir === 'up' ? pdx : cdx);
        this.bubble(nextIdx, dir);
    }
    
    
    // SOLUTION PICKS UP HERE 
    const heap = new MinHeap();
    for (const e of countsArray) {
        if (heap.vals.length < k) {
            heap.add(e);
        } else if (e[1] > heap.vals[0][1]) {
            heap.extract();
            heap.add(e);
        }
    }
    
    const topK = Array(k);
    let i = 0;
    while (heap.vals.length > 0) {
        topK[i] = heap.extract()[0];
        i++;
    }
    return topK;
    
};