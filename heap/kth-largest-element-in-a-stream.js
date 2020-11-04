// https://leetcode.com/problems/kth-largest-element-in-a-stream/
// tags - heap
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k;
    this.buffer = nums.sort((n1, n2) => n1 - n2);
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    // linear scan
    let j = 0; // index to insert at
    if (val > this.buffer[this.buffer.length-1]) {
        j = this.buffer.length;
    } else if (val > this.buffer[0]) {
        for (let i = 0; i < this.buffer.length; i++) {
            if (this.buffer[i] >= val) {
                j = i;
                break;
            }
        }
    }
    
    this.buffer = [...this.buffer.slice(0,j), val, ...this.buffer.slice(j)];
    if (this.buffer.length >= this.k) {
        return this.buffer[this.buffer.length - this.k];
    }
    
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */