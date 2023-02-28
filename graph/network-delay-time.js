// https://leetcode.com/problems/network-delay-time/
// tags - graph
/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  // Convert the edges to an adjacency list.
  const al = new Array(n + 1).fill(0).map(() => []);
  for (const [s, t, w] of times) {
    al[s].push([t, w]);
  }

  // Apply Dijkstra's algorithm.
  const heap = new Heap((p, c) => p[1] <= c[1]); // Min-heap
  heap.add([k, 0]);
  for (let i = 1; i <= n; i++) {
    heap.add([i, Infinity]);
  }

  let maxDistFromK = 0;
  let numVisited = 0;
  const visited = new Array(n + 1).fill(false);
  while (numVisited < n) {
    const [v, distFromK] = heap.remove();
    if (visited[v]) continue;
    if (distFromK === Infinity) return -1;
    maxDistFromK = Math.max(maxDistFromK, distFromK);
    visited[v] = true;
    numVisited++;
    for (const [vn, weight] of al[v]) {
      if (!visited[vn]) {
        heap.add([vn, distFromK + weight]);
      }
    }
  }
  return maxDistFromK;
};

class Heap {
  constructor(cmpFn) {
    this.vals = []; // Initialize the backing array.
    this.cmp = cmpFn; // Takes a parent & child value & returns a boolean based on their ordering relationship.
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
