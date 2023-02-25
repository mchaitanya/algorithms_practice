// https://leetcode.com/problems/top-k-frequent-elements/
// tags - heap, sorting
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  // Store how many times each number occurs.
  const map = new Map();
  for (const n of nums) {
    const count = map.get(n) || 0;
    map.set(n, count + 1);
  }

  // Solve with a heap.
  const heap = new Heap((p, c) => p[1] <= c[1]); // Min-heap
  for (const entry of map.entries()) {
    if (heap.vals.length < k) {
      heap.add(entry);
    } else if (entry[1] > heap.vals[0][1]) {
      heap.remove();
      heap.add(entry);
    }
  }
  return heap.vals.map((entry) => entry[0]);

  // return Array.from(map.entries())
  //     .sort((e1, e2) => e2[1] - e1[1]) // Sort the entries in decreasing order by count.
  //     .slice(0, k) // Keep only the top k.
  //     .map((e) => e[0]); // Map the entry to the number.
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
