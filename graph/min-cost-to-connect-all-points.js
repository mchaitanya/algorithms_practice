// https://leetcode.com/problems/min-cost-to-connect-all-points/
// tags - graph
/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function (points) {
  const n = points.length;
  if (n == 1) return 0;

  // PRIM'S ALGORITHM
  const heap = new Heap((p, c) => p[1] <= c[1]); // Min-heap
  heap.add([0, 0]);

  let totalCost = 0;
  let numVisited = 0;
  const visited = new Array(n).fill(false);
  while (numVisited < n) {
    const [v, dist] = heap.remove();
    if (visited[v]) continue;
    visited[v] = true;
    numVisited++;
    totalCost += dist;
    // Add edges from vn that don't already go to a visited node into the heap.
    for (let vn = 0; vn < n; vn++) {
      if (!visited[vn]) {
        const dist =
          Math.abs(points[vn][0] - points[v][0]) +
          Math.abs(points[vn][1] - points[v][1]);
        heap.add([vn, dist]);
      }
    }
  }
  return totalCost;

  // // KRUSKAL'S ALGORITHM:
  // const edges = []; // Represent each edge with a tuple - [p1, p2, weight]
  // for (let i = 0; i < n; i++) {
  //     for (let j = i+1; j < n; j++) {
  //         const dist = Math.abs(points[j][0] - points[i][0]) + Math.abs(points[j][1] - points[i][1]);
  //         edges.push([i, j, dist]);
  //     }
  // }

  // // Sort the edges by distance.
  // edges.sort((e1, e2) => e1[2] - e2[2]);

  // // Construct the minimum spanning tree connecting the points. Pick n-1 edges.
  // // Test if adding an edge creates a cycle with union find. i.e. are both vertices of the edge already connected.
  // let totalCost = 0;
  // let numReq = n-1;
  // const uf = new UnionFind(n);
  // for (let [i, j, cost] of edges) {
  //     if (uf.union(i, j)) {
  //         numReq--;
  //         totalCost += cost;
  //         if (numReq === 0) break;
  //     }
  // }
  // return totalCost;
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

// class UnionFind {
//     constructor(n) {
//         this.parent = new Array(n);
//         for (let i = 0; i < n; i++) {
//             this.parent[i] = i;
//         }
//     }

//     find(x) {
//         if (x === this.parent[x]) return x;
//         return this.parent[x] = this.find(this.parent[x]); // Path compression.
//     }

//     // Return false if x & y were already connected. True if they weren't.
//     union(x, y) {
//         const rx = this.find(x);
//         const ry = this.find(y);
//         if (rx !== ry) this.parent[ry] = rx;
//         return rx !== ry;
//     }
// }
