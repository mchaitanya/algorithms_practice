// https://leetcode.com/problems/min-stack/
// tags - stack

var MinStack = function () {
  // Each element in the stack is a tuple of the number & min seen so far.
  this.vals = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  const minSoFar = this.getMin() ?? Infinity;
  this.vals.push([val, Math.min(minSoFar, val)]);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.vals.pop(); // Don't have to return anything. Okay even if vals is empty.
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  if (this.vals.length > 0) {
    return this.vals[this.vals.length - 1][0];
  }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  if (this.vals.length > 0) {
    return this.vals[this.vals.length - 1][1];
  }
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
