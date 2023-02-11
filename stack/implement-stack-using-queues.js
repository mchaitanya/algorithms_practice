// https://leetcode.com/problems/implement-stack-using-queues
// tags - stack, queue

var MyStack = function () {
  this.rear = undefined; //
  this.queue1 = []; // Main queue that holds the elements of the stack.
  this.queue2 = []; // Helper queue for popping.
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.queue1.push(x);
  this.rear = x;
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  if (this.empty()) return;
  this.rear = undefined;
  while (this.queue1.length > 1) {
    if (this.queue1.length === 2) {
      this.rear = this.queue1[0];
    }
    this.queue2.push(this.queue1.shift());
  }
  const popped = this.queue1.shift();
  // Switch the queues.
  this.queue1 = this.queue2;
  this.queue2 = [];
  return popped;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  if (!this.empty()) return this.rear;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.queue1.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
