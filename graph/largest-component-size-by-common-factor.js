// https://leetcode.com/problems/largest-component-size-by-common-factor/
// tags - graph
/**
 * @param {number[]} nums
 * @return {number}
 */
var largestComponentSize = function (nums) {
  // Find the max in nums.
  let max = nums[0]; // Given nums.length >= 1
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) max = nums[i];
  }

  // Find all primes up to the max.
  const primes = [];
  search: for (let i = 2; i <= max; i++) {
    for (let p of primes) {
      if (i % p === 0) continue search;
    }
    primes.push(i);
  }

  // Apply union-find to find the connected components.
  const parent = new Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    parent[i] = i;
  }

  function find(x) {
    if (x === parent[x]) return x;
    return (parent[x] = find(parent[x])); // Path compression.
  }

  function union(x, y) {
    const rootX = find(x);
    const rootY = find(y);
    if (rootX !== rootY) parent[rootY] = rootX;
  }

  // If 2 numbers share a prime factor, connect them.
  for (const p of primes) {
    for (let i = 0, j = -1; i < nums.length; i++) {
      if (nums[i] % p !== 0) continue;
      if (j === -1) {
        j = i;
      } else {
        union(i, j);
      }
    }
  }

  let maxSize = 0;
  const sizes = new Map();
  for (let i = 0; i < nums.length; i++) {
    const root = find(i);
    const size = sizes.get(root) || 0;
    sizes.set(root, size + 1);
    if (size + 1 > maxSize) {
      maxSize = size + 1;
    }
  }
  return maxSize;
};
