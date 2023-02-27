// https://leetcode.com/problems/find-median-from-data-stream/
// tags - heap
var MedianFinder = function () {
  // Solve with a max- & a min-heap.
  // The size of the max-heap is equal/one more than that of the min-heap.
  this.max = new Heap((p, c) => p >= c);
  this.min = new Heap((p, c) => p <= c);
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  if (num <= this.max.vals[0]) {
    this.max.add(num);
    if (this.max.vals.length > this.min.vals.length + 1) {
      this.min.add(this.max.remove());
    }
  } else {
    this.min.add(num);
    if (this.min.vals.length > this.max.vals.length) {
      this.max.add(this.min.remove());
    }
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if (this.max.vals.length > this.min.vals.length) {
    return this.max.vals[0];
  } else {
    // Both heaps should have the same size.
    return (this.max.vals[0] + this.min.vals[0]) / 2;
  }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

class Heap {
  constructor(cmpFn) {
    this.vals = []; // Initialize the backing array.
    this.cmp = cmpFn; // Takes a parent & child value & returns a boolean based on their ordering relationship.
  }

  add(val) {
    this.vals.push(val); // Add the value at the end.
    this.bubble(this.vals.length - 1, "up"); // Fix the heap order.
  }

  remove() {
    const top = this.vals.shift(); // Remove the root.
    if (this.vals.length > 1) {
      this.vals.unshift(this.vals.pop()); // Replace the root with the right-most node on the last level.
      this.bubble(0, "down"); // Fix the heap order.
    }
    return top;
  }

  bubble(i, dir) {
    const pi = dir === "down" ? i : Math.floor((i - 1) / 2);
    if (pi < 0) return;
    const len = this.vals.length;
    const li = 2 * pi + 1,
      ri = 2 * pi + 2;
    if (li >= len) return;
    const pval = this.vals[pi],
      lval = this.vals[li],
      rval = this.vals[ri];
    if (!this.cmp(pval, lval) || (ri < len && !this.cmp(pval, rval))) {
      if (ri < len && this.cmp(rval, lval)) {
        this.swapThenBubble(pi, ri, dir);
      } else {
        this.swapThenBubble(pi, li, dir);
      }
    }
  }

  swapThenBubble(pi, ci, dir) {
    [this.vals[pi], this.vals[ci]] = [this.vals[ci], this.vals[pi]];
    const i = dir === "up" ? pi : ci;
    this.bubble(i, dir);
  }
}
