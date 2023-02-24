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
  // If 2 numbers share a prime factor, connect them.
  const uf = new UnionFind(nums.length);
  for (const p of primes) {
    for (let i = 0, j = -1; i < nums.length; i++) {
      if (nums[i] % p !== 0) continue;
      if (j === -1) {
        j = i;
      } else {
        uf.union(i, j);
      }
    }
  }

  let maxSize = 0;
  const sizes = new Map();
  for (let i = 0; i < nums.length; i++) {
    const root = uf.find(i);
    const size = sizes.get(root) || 0;
    sizes.set(root, size + 1);
    if (size + 1 > maxSize) {
      maxSize = size + 1;
    }
  }
  return maxSize;
};

class UnionFind {
  constructor(n) {
    this.parent = new Array(n).fill(0).map((_, i) => i);
    this.rank = new Array(n).fill(1);
  }

  find(x) {
    if (x === this.parent[x]) return x;
    return (this.parent[x] = this.find(this.parent[x])); // Path compression.
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX === rootY) return;
    if (this.rank[rootX] > this.rank[rootY]) {
      this.parent[rootY] = rootX;
    } else if (this.rank[rootY] > this.rank[rootX]) {
      this.parent[rootX] = rootY;
    } else {
      this.parent[rootY] = rootX;
      this.rank[rootX]++;
    }
  }
}
