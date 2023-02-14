// https://leetcode.com/problems/optimize-water-distribution-in-a-village/
// tags - graph
/**
 * @param {number} n
 * @param {number[]} wells
 * @param {number[][]} pipes
 * @return {number}
 */
var minCostToSupplyWater = function (n, wells, pipes) {
  // Apply union-find to break the houses up into connected components.
  const parent = new Array(n);
  // Store the cost to build the well & lay the pipes for each component.
  const well = new Array(n);
  const pipe = new Array(n);
  for (let i = 0; i < n; i++) {
    parent[i] = i;
    well[i] = wells[i];
    pipe[i] = 0;
  }

  function find(x) {
    if (x === parent[x]) return x;
    const root = find(parent[x]);
    parent[x] = root; // Path compression.
    return root;
  }

  function union(x, y, cost) {
    const rx = find(x);
    const ry = find(y);
    if (rx === ry) return;
    // Connect 2 components only if that reduces the cost for both the components.
    if (Math.min(well[rx], well[ry]) + cost > well[rx] + well[ry]) return;
    parent[ry] = rx;
    well[rx] = Math.min(well[rx], well[ry]);
    pipe[rx] += pipe[ry] + cost;
  }

  // Try to connect the houses with the least costly pipes.
  pipes.sort((p1, p2) => p1[2] - p2[2]);
  for (const [h1, h2, cost] of pipes) {
    // The house numbers given are 1-indexed.
    union(h1 - 1, h2 - 1, cost);
  }

  // Add up the costs for each component.
  let totalCost = 0;
  for (let i = 0; i < n; i++) {
    if (i === parent[i]) {
      totalCost += well[i] + pipe[i];
    }
  }
  return totalCost;
};
