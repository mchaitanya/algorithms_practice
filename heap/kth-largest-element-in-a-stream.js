// https://leetcode.com/problems/kth-largest-element-in-a-stream/
// tags - heap
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.size = k;
  this.heap = new Heap(nums.slice(0, k), (p, c) => p <= c); // Min-heap
  for (let i = k; i < nums.length; i++) {
    this.add(nums[i]);
  }
  // this.heap = new Heap([], (p,c) => p <= c);
  // for (const n of nums) {
  //     this.add(n);
  // }
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  if (this.heap.vals.length < this.size) {
    this.heap.add(val);
  } else if (val > this.heap.vals[0]) {
    this.heap.remove();
    this.heap.add(val);
  }
  return this.heap.vals[0];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

class Heap {
  constructor(vals, cmpFn) {
    this.vals = vals;
    this.cmp = cmpFn;
    this.heapify();
  }

  add(val) {
    this.vals.push(val);
    this.bubble(this.vals.length - 1, "up");
  }

  remove() {
    const top = this.vals.shift();
    if (this.vals.length > 1) {
      this.vals.unshift(this.vals.pop());
      this.bubble(0, "down");
    }
    return top;
  }

  heapify() {
    for (let i = this.vals.length - 1; i >= 0; i--) {
      this.bubble(i, "down");
    }
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

// /**
//  * @param {number} k
//  * @param {number[]} nums
//  */
// var KthLargest = function(k, nums) {
//     this.k = k;
//     this.buffer = nums.sort((n1, n2) => n1 - n2);
// };

// /**
//  * @param {number} val
//  * @return {number}
//  */
// KthLargest.prototype.add = function(val) {
//     // linear scan
//     let j = 0; // index to insert at
//     if (val > this.buffer[this.buffer.length-1]) {
//         j = this.buffer.length;
//     } else if (val > this.buffer[0]) {
//         for (let i = 0; i < this.buffer.length; i++) {
//             if (this.buffer[i] >= val) {
//                 j = i;
//                 break;
//             }
//         }
//     }

//     this.buffer = [...this.buffer.slice(0,j), val, ...this.buffer.slice(j)];
//     if (this.buffer.length >= this.k) {
//         return this.buffer[this.buffer.length - this.k];
//     }

// };
