// https://leetcode.com/problems/minimum-cost-to-connect-sticks/
// tags - heap
/**
 * @param {number[]} sticks
 * @return {number}
 */
var connectSticks = function (sticks) {
  // Solve with a min-heap.
  // At each step, take the smallest 2 sticks & connect them.
  let cost = 0;
  const heap = new Heap(sticks, (p, c) => p <= c);
  while (heap.vals.length > 1) {
    const stick1 = heap.remove();
    const stick2 = heap.remove();
    heap.add(stick1 + stick2);
    cost += stick1 + stick2;
  }
  return cost;
};

class Heap {
  constructor(vals, cmpFn) {
    this.vals = vals; // Initialize the backing array.
    this.cmp = cmpFn; // Takes a parent & child value & returns a boolean based on their ordering relationship.
    this.heapify();
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
