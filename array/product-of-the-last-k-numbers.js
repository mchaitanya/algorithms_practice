// https://leetcode.com/problems/product-of-the-last-k-numbers/
// tags - array

var ProductOfNumbers = function() {
    this.arr = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
    if (num === 0) {
        this.arr = [];
        return;
    }
    
    this.arr.push(num);
    for (let i = 0; i < this.arr.length-1; i++) {
        this.arr[i] *= num;
    }
};

/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
    if (k > this.arr.length) {
        return 0;
    } else {
        return this.arr[this.arr.length - k];
    }
};

/** 
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */