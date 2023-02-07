// https://leetcode.com/problems/design-circular-queue/
// tags - array, queue
/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.vals = new Array(k).fill(null);
  this.head = null; // Points to the front.
  this.tail = null; // Points to the rear.
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.isFull()) return false;
  if (this.isEmpty()) {
    this.head = 0;
    this.tail = 0;
  } else {
    this.tail = (this.tail + 1) % this.vals.length;
  }
  this.vals[this.tail] = value;
  return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.isEmpty()) return false;
  this.vals[this.head] = null;
  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
  } else {
    this.head = (this.head + 1) % this.vals.length;
  }
  return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  return this.head === null ? -1 : this.vals[this.head];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  return this.tail === null ? -1 : this.vals[this.tail];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.head === null && this.tail === null;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this.tail !== null && (this.tail + 1) % this.vals.length === this.head;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
