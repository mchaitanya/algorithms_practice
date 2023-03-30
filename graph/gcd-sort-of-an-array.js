// https://leetcode.com/problems/gcd-sort-of-an-array/
// tags - graph, union-find
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var gcdSort = function (nums) {
  const n = nums.length;
  // Make a copy & sort the numbers.
  const copy = [...nums];
  copy.sort((n1, n2) => n1 - n2);

  const primes = [];
  numberScan: for (let num = 2; num <= copy[n - 1]; num++) {
    for (const p of primes) {
      if (num % p === 0) continue numberScan;
    }
    primes.push(num);
  }

  let numComponents = n;
  const uf = new UnionFind(n);
  primeScan: for (const p of primes) {
    for (let i = 0, j; i < n; i++) {
      if (nums[i] % p === 0) {
        if (j == null) {
          j = i;
        } else if (uf.union(i, j)) {
          numComponents--;
          if (numComponents === 1) break primeScan;
        }
      }
    }
  }

  // Map each root to its component indexes.
  const map = new Map();
  for (let i = 0; i < n; i++) {
    const root = uf.find(i);
    if (!map.has(root)) map.set(root, []);
    map.get(root).push(i);
  }

  function areAnagrams(indexes) {
    const map = new Map();
    for (let index of indexes) {
      const count = map.get(nums[index]) || 0;
      map.set(nums[index], count + 1);
    }

    for (let index of indexes) {
      if (!map.has(copy[index])) return false;
      const count = map.get(copy[index]);
      if (count > 1) {
        map.set(copy[index], count - 1);
      } else {
        map.delete(copy[index]);
      }
    }
    return true;
  }

  for (const indexes of map.values()) {
    // The numbers at the indexes in nums & copy should be anagrams of each other.
    if (!areAnagrams(indexes)) return false;
  }
  return true;
};

class UnionFind {
  constructor(n) {
    this.parent = new Array(n).fill(0).map((v, i) => i);
  }

  find(x) {
    if (x === this.parent[x]) return x;
    const root = this.find(this.parent[x]);
    this.parent[x] = root; // Path compression.
    return root;
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX !== rootY) this.parent[rootY] = rootX;
    return rootX !== rootY;
  }
}
