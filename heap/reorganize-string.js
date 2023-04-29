// https://leetcode.com/problems/reorganize-string/
// tags - heap
/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (s) {
  const map = new Map();
  for (const c of s) {
    const count = map.get(c) || 0;
    map.set(c, count + 1);
  }

  // Greedy approach - Order the characters by frequency.
  // Build up the string by interleaving the currently most frequest & next most frequent characters.
  const entries = Array.from(map.entries());
  const heap = new Heap(entries, (p, c) => p[1] > c[1]);

  let result = "";
  while (heap.vals.length > 0) {
    const [c1, count1] = heap.remove();
    result += c1;
    if (heap.vals.length > 0) {
      const [c2, count2] = heap.remove();
      result += c2;
      if (count2 > 1) heap.add([c2, count2 - 1]);
    } else if (count1 > 1) {
      return "";
    }
    if (count1 > 1) heap.add([c1, count1 - 1]);
  }
  return result;
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
