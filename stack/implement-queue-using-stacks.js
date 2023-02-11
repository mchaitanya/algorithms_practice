// https://leetcode.com/problems/implement-queue-using-stacks/
// tags - queue, stack
var MyQueue = function () {
  this.front = undefined; // The element at the bottom of the stack1.
  this.stack1 = []; // Main stack that holds the elements.
  this.stack2 = []; // Helper for popping/peeking.
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stack1.push(x);
  if (this.stack1.length === 1) {
    this.front = x;
  }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.empty()) return;
  while (this.stack1.length > 0) {
    this.stack2.push(this.stack1.pop());
  }
  const popped = this.stack2.pop();
  this.front =
    this.stack2.length > 0 ? this.stack2[this.stack2.length - 1] : undefined;
  while (this.stack2.length > 0) {
    this.stack1.push(this.stack2.pop());
  }
  return popped;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.front;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.stack1.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
