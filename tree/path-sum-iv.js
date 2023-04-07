// https://leetcode.com/problems/path-sum-iv/
// tags - tree
/**
 * @param {number[]} nums
 * @return {number}
 */
var pathSum = function (nums) {
  function parse(num) {
    const v = num % 10;
    num = Math.floor(num / 10);
    const p = num % 10;
    const d = Math.floor(num / 10);
    const index = 2 ** (d - 1) - 1 + p - 1;
    return [index, v];
  }

  // Given depth < 5.
  const nodes = new Array(2 ** 4 - 1).fill(null);
  for (const num of nums) {
    const [index, val] = parse(num);
    nodes[index] = val;
  }

  let result = 0;
  function dfs(v, sum) {
    // nodes[v] shouldn't be null
    sum += nodes[v];
    const left = 2 * v + 1,
      right = 2 * v + 2;
    const leftVal = left < nodes.length ? nodes[left] : null;
    const rightVal = right < nodes.length ? nodes[right] : null;
    if (leftVal == null && rightVal == null) {
      result += sum;
    } else {
      if (leftVal != null) dfs(left, sum);
      if (rightVal != null) dfs(right, sum);
    }
  }

  dfs(0, 0); // Given root not null.

  return result;
};
