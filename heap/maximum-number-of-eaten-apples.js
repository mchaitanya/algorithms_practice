// https://leetcode.com/problems/maximum-number-of-eaten-apples/
// tags - heap
/**
 * @param {number[]} apples
 * @param {number[]} days
 * @return {number}
 */
var eatenApples = function (apples, days) {
  const n = apples.length;
  // Idea: Eat the apples that will expire first.
  // Solve with a heap. Entries in the heap will have the form: [expire, count].
  const heap = new Heap((p, c) => p[0] < c[0]);

  let i = 0;
  let numEaten = 0;
  while (i < n || heap.vals.length > 0) {
    if (i < n && apples[i] > 0) {
      heap.add([i + days[i], apples[i]]);
    }
    while (heap.vals.length > 0) {
      let [expire, count] = heap.remove();
      if (expire > i) {
        numEaten++;
        count--;
        if (count > 0 && expire > i + 1) heap.add([expire, count]);
        break;
      }
    }
    i++;
  }
  return numEaten;
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
