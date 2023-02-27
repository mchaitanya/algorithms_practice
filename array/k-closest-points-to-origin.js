// https://leetcode.com/problems/k-closest-points-to-origin/
// tags - array
/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function (points, K) {
  // Solve with a max-heap.
  const heap = new Heap((p, c) => p[0] >= c[0]);
  for (let i = 0; i < points.length; i++) {
    const distSq = points[i][0] ** 2 + points[i][1] ** 2;
    if (heap.vals.length < K) {
      heap.add([distSq, i]);
    } else if (distSq < heap.vals[0][0]) {
      heap.remove();
      heap.add([distSq, i]);
    }
  }
  return heap.vals.map((val) => points[val[1]]);

  //   const sorted = points.sort((p1, p2) => {
  //     const d1 = p1[0] * p1[0] + p1[1] * p1[1];
  //     const d2 = p2[0] * p2[0] + p2[1] * p2[1];
  //     return d1 - d2;
  //   });
  //   return sorted.slice(0, K);
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
