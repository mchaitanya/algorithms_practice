// https://leetcode.com/problems/time-needed-to-inform-all-employees/
// tags - graph
/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function (n, headID, manager, informTime) {
  // Model the employees as a tree with each node being the time needed for that employee.
  const children = new Array(n).fill(0).map(() => []);
  for (let i = 0; i < n; i++) {
    // The head doesn't have a manager. manager[headID] = -1.
    if (i !== headID) {
      children[manager[i]].push(i);
    }
  }

  // Calculate the max sum along a path from the root to a leaf.
  function maxPathSum(i) {
    let maxSum = 0;
    for (const c of children[i]) {
      maxSum = Math.max(maxSum, maxPathSum(c));
    }
    return maxSum + informTime[i];
  }
  return maxPathSum(headID);
};
