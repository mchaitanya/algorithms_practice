// https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/
// tags - heap
/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */
var kthLargestNumber = function (nums, k) {
  function isGreater(num1, num2) {
    return num1.length === num2.length
      ? num1 > num2
      : num1.length > num2.length;
  }

  // Solve with a heap.
  const heap = new Heap((p, c) => isGreater(c, p));
  for (const num of nums) {
    if (heap.vals.length < k) {
      heap.add(num);
    } else if (isGreater(num, heap.vals[0])) {
      heap.remove();
      heap.add(num);
    }
  }
  return heap.vals[0];
};

class Heap {
  constructor(cmpFn) {
    this.vals = [];
    this.cmp = cmpFn;
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
        this.swap(pi, ri, dir);
      } else {
        this.swap(pi, li, dir);
      }
    }
  }

  swap(pi, ci, dir) {
    [this.vals[pi], this.vals[ci]] = [this.vals[ci], this.vals[pi]];
    const i = dir === "up" ? pi : ci;
    this.bubble(i, dir);
  }
}
