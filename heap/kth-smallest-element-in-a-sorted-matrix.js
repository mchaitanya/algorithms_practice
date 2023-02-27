// https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/
// tags - heap
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  const n = matrix.length;
  // Min-heap approach from LC
  // Each column is a sorted list. Contruct a heap with a pointer into each list.
  const elems = matrix[0].slice(0, Math.min(n, k)).map((val, c) => [val, c, 0]);
  const heap = new Heap(elems, (p, c) => p[0] <= c[0]); // Min-heap

  let result;
  while (k > 0) {
    const [val, c, r] = heap.remove();
    if (r < n - 1) heap.add([matrix[r + 1][c], c, r + 1]);
    result = val;
    k--;
  }
  return result;

  // const heap = new Heap((p,c) => p >= c); // Max-heap
  // for (let r = 0; r < n; r++) {
  //     for (let c = 0; c < n; c++) {
  //         const val = matrix[r][c];
  //         if (heap.vals.length < k) {
  //             heap.add(val);
  //         } else if (val < heap.vals[0]) {
  //             heap.remove();
  //             heap.add(val);
  //         }
  //     }
  // }
  // return heap.vals[0];
};

class Heap {
  constructor(vals, cmpFn) {
    this.vals = vals;
    this.cmp = cmpFn;
    this.heapify();
  }

  heapify() {
    for (let i = this.vals.length - 1; i >= 0; i--) {
      this.bubble(i, "down");
    }
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
