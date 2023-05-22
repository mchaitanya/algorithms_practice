// https://leetcode.com/problems/take-gifts-from-the-richest-pile/
// tags - heap
/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function (gifts, k) {
  // Given gifts.length >= 1.
  const heap = new Heap(gifts, (p, c) => p > c);
  while (k > 0 && heap.vals[0] > 1) {
    heap.add(Math.floor(Math.sqrt(heap.remove())));
    k--;
  }

  let numLeft = 0;
  for (const val of heap.vals) {
    numLeft += val;
  }
  return numLeft;
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
