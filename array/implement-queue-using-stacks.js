// https://leetcode.com/problems/implement-queue-using-stacks/
// tags - queue, stack
/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.s1 = []; // main stack
    this.s2 = []; // buffer for some ops
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.s1.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    // get element at bottom of s1
    while (this.s1.length > 0) {
        this.s2.push(this.s1.pop());
    }
    // emptied s1 at this point
    
    let val = this.s2.pop();
    while (this.s2.length > 0) {
        this.s1.push(this.s2.pop());
    }
    // added everything but last element back to s1
    
    return val;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    while (this.s1.length > 0) {
        this.s2.push(this.s1.pop());
    }
    
    let val = this.s2[this.s2.length - 1];
    while (this.s2.length > 0) {
        this.s1.push(this.s2.pop());
    }
    
    return val;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.s1.length === 0;
};


/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */