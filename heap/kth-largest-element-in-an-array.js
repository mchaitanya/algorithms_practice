// https://leetcode.com/problems/kth-largest-element-in-an-array/
// tags - heap
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  // // Solve with a max-heap.
  // const heap = new Heap(nums, (p,c) => p >= c);
  // let numExtract = k-1; // Extract k-1 numbers. Then the top number will be the kth largest.
  // while (numExtract > 0) {
  //     heap.extract();
  //     numExtract--;
  // }
  // return heap.vals[0];

  // Solve with a min-heap.
  const heap = new Heap([], (p, c) => p <= c);
  for (const n of nums) {
    if (heap.vals.length < k) {
      heap.add(n);
    } else if (n > heap.vals[0]) {
      heap.extract();
      heap.add(n);
    }
  }
  return heap.vals[0];

  // // Solve with sorting.
  // nums.sort((n1, n2) => n2-n1);
  // return nums[k-1];
};

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

  extract() {
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
