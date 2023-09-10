// https://leetcode.com/problems/combinations/
// tags - backtracking
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  // Solve with backtracking.
  const combinations = [];
  const combination = [];
  function choose(start) {
    const numReq = k - combination.length;
    if (numReq > n - start + 1) return; // n-start+1 numbers are available for choosing in the array.
    if (numReq === 0) {
      // Store the combination.
      combinations.push([...combination]);
      return;
    }
    // Choose a number that wasn't chosen before.
    for (let j = start; j <= n; j++) {
      combination.push(j);
      // In the next round, choose a number starting from j+1.
      // This way the numbers in the combination will always be sorted order.
      choose(j + 1);
      combination.pop();
    }
  }
  choose(1);
  return combinations;
};
